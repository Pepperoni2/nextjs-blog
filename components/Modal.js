const Modal = () => {
    return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title text-capitalize" id="exampleModalLabel">
                    {/* modal.length !== 0 && modal[0].title */}
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                Do you want to dismiss this event?
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleSubmit}>Yes</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal">Cancel</button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Modal