# ============================================================
# Stage 1: Dependencies
# ============================================================
FROM oven/bun:alpine AS deps
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# ============================================================
# Stage 2: Builder
# ============================================================
FROM oven/bun:alpine AS builder
WORKDIR /app

ARG NEXT_PUBLIC_APP_URL=http://localhost:3016
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bun run build

# ============================================================
# Stage 3: Runner (Production)
# ============================================================
FROM oven/bun:alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 --ingroup nodejs nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3016
ENV PORT=3016
ENV HOSTNAME="0.0.0.0"

CMD ["bun", "server.js"]
