import React from "react";

export default function BottomSheet({ showBottomSheet, hideBottomSheet, children }) {
  const handleHideBottomSheet = (e) => {
    if (e.target !== e.currentTarget) return;
    hideBottomSheet();
  };

  return (
    <div
      className={`bottomsheet-overlay ${
        showBottomSheet ? "display-overlay" : "hide-overlay"
      }`}
      onClick={(e) => handleHideBottomSheet(e)}
    >
      <div
        className={`bottomsheet-content ${
          showBottomSheet ? "display-content" : "hide-content"
        } `}
      >
        {children}
      </div>
    </div>
  );
}
