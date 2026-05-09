function Sidebar({ showSidebar, handleClose }) {
  return (
    <div
      className={"offcanvas offcanvas-start " + (showSidebar ? "show" : "")}
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          Menu
        </h5>
        <button
          type="button"
          onClick={handleClose}
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="list-unstyled d-flex justify-content-between align-items-center"></ul>
      </div>
    </div>
  );
}

export default Sidebar;
