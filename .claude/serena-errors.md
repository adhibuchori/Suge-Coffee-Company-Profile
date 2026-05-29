# Serena Error Log

- **Date/Time**: 2026-05-28T23:45:22+07:00
- **Error**: Serena MCP failed to load because the project 'suge-coffee' is not listed in the available projects of the user's global config `/Users/adhibuchori/.serena/serena_config.yml`.
- **Details**:
  ```
  server name serena failed to load:
  INFO  serena.agent:__init__:619 - Available projects: be-sdnjoglo05pagi, fe-sdnjoglo05pagi, serenity-code-landing-page
  ...
  mcp server shutting down
  ```
- **Fallback**: Falling back to built-in view_file/replace_file_content tools for TSX/TS file operations.

- **Date/Time**: 2026-05-29T00:25:00+07:00
- **Error**: Serena MCP failed to load with "context canceled" error immediately after initialization complete and starting server, despite 'suge-coffee' being registered as available project.
- **Details**:
  ```
  server name serena failed to load:
  INFO  serena.mcp:_set_mcp_tools:269 - Starting MCP server with 23 tools: [...]
  INFO  serena.mcp:server_lifespan:362 - MCP server lifetime setup complete
  INFO  serena.mcp:server_lifespan:369 - MCP server shutting down
  INFO  serena.agent:on_shutdown:1275 - SerenaAgent is shutting down ...
  : context canceled
  ```
- **Fallback**: Falling back to built-in file operations as allowed by the AGENTS.md rule.

- **Date/Time**: 2026-05-29T00:46:00+07:00
- **Error**: Serena MCP failed to load with "context canceled" error during initial_instructions / get_current_config tool calls.
- **Details**:
  ```
  Encountered error in step execution: error executing cascade step: CORTEX_STEP_TYPE_MCP_TOOL: server name serena failed to load: ... context canceled
  ```
- **Fallback**: Falling back to built-in view_file/replace_file_content tools for TSX/TS file operations as per standard fallback procedure.
