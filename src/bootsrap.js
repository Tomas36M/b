import { useEffect } from 'react';

const BootstrapScript = () => {
  useEffect(() => {
    // Import Bootstrap JavaScript here
    import('bootstrap/dist/js/bootstrap.bundle.min');

    // Optionally, you can include any additional client-side code that depends on Bootstrap here.
  }, []);

  return null; // This component doesn't render anything
};

export default BootstrapScript;
