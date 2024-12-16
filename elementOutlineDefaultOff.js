    //By Default Outlines Off
    document.getElementById('outline-elements').disabled = false;

    //Toggle Outlines Function
    function toggleOutlines() {
      const outlineStyle = document.getElementById('outline-elements');

      // Toggle the outline styles
      if (outlineStyle.disabled) {
        outlineStyle.disabled = false; // Enable the styles
      } else {
        outlineStyle.disabled = true; // Disable the styles
      }
    };
