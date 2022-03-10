import React from "react"

// because of rehydration
// https://www.joshwcomeau.com/react/the-perils-of-rehydration/
// read this article for more information

export default function ClientOnly({ children, ...delegated }) {
    const [hasMounted, setHasMounted] = React.useState(false);
    React.useEffect(() => {
      setHasMounted(true);
    }, []);
    if (!hasMounted) {
      return null;
    }
    return (
      <div {...delegated}>
        {children}
      </div>
    );
  }