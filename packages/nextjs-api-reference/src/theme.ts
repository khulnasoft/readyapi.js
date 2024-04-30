export const nextjsThemeCss = `
/* basic theme */
.dark-mode {
  --readyapi-color-1: rgba(255, 255, 255, 0.9);
  --readyapi-color-2: rgba(255, 255, 255, 0.62);
  --readyapi-color-3: rgba(255, 255, 255, 0.44);
  --readyapi-color-accent: #3070ec;

  --readyapi-background-1: #000000;
  --readyapi-background-2: #1a1a1a;
  --readyapi-background-3: #2a2828;
  --readyapi-background-accent: transparent;

  --readyapi-border-color: rgba(255, 255, 255, 0.1);
  --readyapi-code-language-color-supersede: var(--readyapi-color-1);
  --readyapi-code-languages-background-supersede: var(--readyapi-background-3);
}

.light-mode .dark-mode,
.light-mode {
  --readyapi-color-1: #2a2f45;
  --readyapi-color-2: #757575;
  --readyapi-color-3: #8e8e8e;
  --readyapi-color-accent: #3070ec;

  --readyapi-background-1: #fff;
  --readyapi-background-2: #fafafa;
  --readyapi-background-3: #e7e7e7;
  --readyapi-background-accent: transparent;

  --readyapi-border-color: rgba(0, 0, 0, 0.1);

  --readyapi-code-language-color-supersede: var(--readyapi-color-1);
  --readyapi-code-languages-background-supersede: var(--readyapi-background-3);
}
.light-mode .readyapi-card {
  --readyapi-background-1: #fff;
  --readyapi-background-2: #fff !important;
  --readyapi-background-3: #fff !important;
}
.dark-mode .readyapi-card {
  --readyapi-background-1: #000000;
  --readyapi-background-2: #000000 !important;
  --readyapi-background-3: #000000 !important;
}
.light-mode .examples .readyapi-card .readyapi-card-header {
  --readyapi-background-2: #fafafa;
}
.dark-mode .examples .readyapi-card .readyapi-card-header {
  --readyapi-background-2: #1a1a1a;
  --readyapi-border-color: #1a1a1a;
}
/* Document header */
.light-mode .t-doc__header,
.dark-mode .t-doc__header {
  --header-background-1: rgba(255,255,255,.8);
  --header-border-color: var(--readyapi-border-color);
  --header-color-1: var(--readyapi-color-1);
  --header-color-2: var(--readyapi-color-2);
  --header-background-toggle: var(--readyapi-color-3);
  --header-call-to-action-color: var(--readyapi-color-accent);
  backdrop-filter: saturate(180%) blur(5px);
}

.dark-mode .t-doc__header {
  --header-background-1: rgba(0,0,0,.5);
}
/* Document Sidebar */
.light-mode .t-doc__sidebar,
.dark-mode .t-doc__sidebar {
  --readyapi-sidebar-background-1: var(--readyapi-background-1);
  --readyapi-sidebar-item-hover-color: var(--readyapi-sidebar-color-1);
  --readyapi-sidebar-item-hover-background: transparent;
  --readyapi-sidebar-item-active-background: var(--readyapi-background-accent);
  --readyapi-sidebar-border-color: transparent;
  --readyapi-sidebar-color-1: var(--readyapi-color-1);
  --readyapi-sidebar-color-2: var(--readyapi-color-2);
  --readyapi-sidebar-color-active: var(--readyapi-color-accent);
  --readyapi-sidebar-search-background: var(--readyapi-background-2);
  --readyapi-sidebar-search-border-color: var(--readyapi-background-2);
  --readyapi-sidebar-search-color: var(--readyapi-color-3);
  --readyapi-sidebar-indent-border: var(--readyapi-border-color);
  --readyapi-sidebar-indent-border-active: #6aacf8;
}
.api-client-drawer .t-doc__sidebar {
  --readyapi-sidebar-border-color: var(--readyapi-border-color);
}
/* advanced */
.light-mode .dark-mode,
.light-mode {
  --readyapi-button-1: rgb(49 53 56);
  --readyapi-button-1-color: #fff;
  --readyapi-button-1-hover: rgb(28 31 33);

  --readyapi-color-green: #417942;
  --readyapi-color-red: #ae3763;
  --readyapi-color-yellow: #edbe20;
  --readyapi-color-blue: #2b66cf;
  --readyapi-color-orange: #cf7a2b;
  --readyapi-color-purple: #6e27b5;

  --readyapi-scrollbar-color: rgba(0, 0, 0, 0.18);
  --readyapi-scrollbar-color-active: rgba(0, 0, 0, 0.36);
}
.dark-mode {
  --readyapi-button-1: #f6f6f6;
  --readyapi-button-1-color: #000;
  --readyapi-button-1-hover: #e7e7e7;

  --readyapi-color-green: #7abe7b;
  --readyapi-color-red: #e5698f;
  --readyapi-color-yellow: #f8ea68;
  --readyapi-color-blue: #68a6f8;
  --readyapi-color-orange: #f89c68;
  --readyapi-color-purple: #b57de9;

  --readyapi-scrollbar-color: rgba(255, 255, 255, 0.24);
  --readyapi-scrollbar-color-active: rgba(255, 255, 255, 0.48);
}
.sidebar .sidebar-indent-nested .sidebar-heading {
  padding-right: 0;
}
.code-languages-icon {
  padding: 10px !important;
}
.sidebar-search-key {
  background: var(--readyapi-background-1) !important;
  border: 1px solid var(--readyapi-border-color);
}
`
