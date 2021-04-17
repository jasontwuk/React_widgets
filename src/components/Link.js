const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    // *** metaKey is the "command key" for Mac
    // *** ctrlKey is the "control key" for Windows
    // *** when users press command key (Mac) or contrl key (Windows) and click a link, open that link in a new tab
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();

    // *** update url without web page refresh
    window.history.pushState({}, "", href);

    // *** navigation event
    // *** the following code will communicate over to those Route component that url is changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
