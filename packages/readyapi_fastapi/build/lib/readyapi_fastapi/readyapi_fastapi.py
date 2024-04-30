from typing_extensions import Annotated, Doc
from fastapi.responses import HTMLResponse


readyapi_theme = """
/* basic theme */
.light-mode {
  --readyapi-color-1: #2a2f45;
  --readyapi-color-2: #757575;
  --readyapi-color-3: #8e8e8e;
  --readyapi-color-accent: #009485;

  --readyapi-background-1: #fff;
  --readyapi-background-2: #fcfcfc;
  --readyapi-background-3: #f8f8f8;
  --readyapi-background-accent: #ecf8f6;

  --readyapi-border-color: rgba(0, 0, 0, 0.1);
}
.dark-mode {
  --readyapi-color-1: rgba(255, 255, 255, 0.9);
  --readyapi-color-2: rgba(255, 255, 255, 0.62);
  --readyapi-color-3: rgba(255, 255, 255, 0.44);
  --readyapi-color-accent: #00ccb8;

  --readyapi-background-1: #1f2129;
  --readyapi-background-2: #282a35;
  --readyapi-background-3: #30323d;
  --readyapi-background-accent: #223136;

  --readyapi-border-color: rgba(255, 255, 255, 0.1);
}
/* Document Sidebar */
.light-mode .t-doc__sidebar {
  --sidebar-background-1: var(--readyapi-background-1);
  --sidebar-item-hover-color: currentColor;
  --sidebar-item-hover-background: var(--readyapi-background-2);
  --sidebar-item-active-background: var(--readyapi-background-accent);
  --sidebar-border-color: var(--readyapi-border-color);
  --sidebar-color-1: var(--readyapi-color-1);
  --sidebar-color-2: var(--readyapi-color-2);
  --sidebar-color-active: var(--readyapi-color-accent);
  --sidebar-search-background: transparent;
  --sidebar-search-border-color: var(--readyapi-border-color);
  --sidebar-search--color: var(--readyapi-color-3);
}

.dark-mode .sidebar {
  --sidebar-background-1: var(--readyapi-background-1);
  --sidebar-item-hover-color: currentColor;
  --sidebar-item-hover-background: var(--readyapi-background-2);
  --sidebar-item-active-background: var(--readyapi-background-accent);
  --sidebar-border-color: var(--readyapi-border-color);
  --sidebar-color-1: var(--readyapi-color-1);
  --sidebar-color-2: var(--readyapi-color-2);
  --sidebar-color-active: var(--readyapi-color-accent);
  --sidebar-search-background: transparent;
  --sidebar-search-border-color: var(--readyapi-border-color);
  --sidebar-search--color: var(--readyapi-color-3);
}

/* advanced */
.light-mode {
  --readyapi-button-1: rgb(49 53 56);
  --readyapi-button-1-color: #fff;
  --readyapi-button-1-hover: rgb(28 31 33);

  --readyapi-color-green: #009485;
  --readyapi-color-red: #d52b2a;
  --readyapi-color-yellow: #ffaa01;
  --readyapi-color-blue: #0a52af;
  --readyapi-color-orange: #953800;
  --readyapi-color-purple: #8251df;

  --readyapi-scrollbar-color: rgba(0, 0, 0, 0.18);
  --readyapi-scrollbar-color-active: rgba(0, 0, 0, 0.36);
}
.dark-mode {
  --readyapi-button-1: #f6f6f6;
  --readyapi-button-1-color: #000;
  --readyapi-button-1-hover: #e7e7e7;

  --readyapi-color-green: #00ccb8;
  --readyapi-color-red: #e5695b;
  --readyapi-color-yellow: #ffaa01;
  --readyapi-color-blue: #78bffd;
  --readyapi-color-orange: #ffa656;
  --readyapi-color-purple: #d2a8ff;

  --readyapi-scrollbar-color: rgba(255, 255, 255, 0.24);
  --readyapi-scrollbar-color-active: rgba(255, 255, 255, 0.48);
}
:root {
  --readyapi-radius: 3px;
  --readyapi-radius-lg: 6px;
  --readyapi-radius-xl: 8px;
}
.readyapi-card:nth-of-type(3) {
  display: none;
}"""

def get_readyapi_api_reference(
    *,
    openapi_url: Annotated[
        str,
        Doc(
            """
            The OpenAPI URL that Readyapi should load and use.
            This is normally done automatically by FastAPI using the default URL
            `/openapi.json`.
            """
        ),
    ],
    title: Annotated[
        str,
        Doc(
            """
            The HTML `<title>` content, normally shown in the browser tab.
            """
        ),
    ],
    readyapi_js_url: Annotated[
        str,
        Doc(
            """
            The URL to use to load the Readyapi JavaScript.
            It is normally set to a CDN URL.
            """
        ),
    ] = "https://cdn.jsdelivr.net/npm/@readyapi/api-reference",
    readyapi_proxy_url: Annotated[
        str,
        Doc(
            """
            The URL to use to set the Readyapi Proxy.
            It is normally set to a Ready API URL (https://api.ready-api.khulnasoft.com/request-proxy), but default is empty
            """
        ),
    ] = "",
    readyapi_favicon_url: Annotated[
        str,
        Doc(
            """
            The URL of the favicon to use. It is normally shown in the browser tab.
            """
        ),
    ] = "https://fastapi.tiangolo.com/img/favicon.png",
    readyapi_theme: Annotated[
        str,
        Doc(
            """
            Custom CSS theme for Readyapi.
            """
        ),
    ] = readyapi_theme,
) -> HTMLResponse:
    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
    <title>{title}</title>
    <!-- needed for adaptive design -->
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="{readyapi_favicon_url}">
    <style>
      body {{
        margin: 0;
        padding: 0;
      }}
    </style>
    <style>
    {readyapi_theme}
    </style>
    </head>
    <body>
    <noscript>
        Readyapi requires Javascript to function. Please enable it to browse the documentation.
    </noscript>
    <script
      id="api-reference"
      data-url="{openapi_url}"
      data-proxy-url="{readyapi_proxy_url}"></script>
    <script src="{readyapi_js_url}"></script>
    </body>
    </html>
    """
    return HTMLResponse(html)