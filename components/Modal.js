const Modal = ({ url }) => {


    return (
        <>
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src={url} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal