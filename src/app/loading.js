export default function Loading() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='d-flex justify-content-center'>
                        <div className='spinner-border text-primary' role='status'>
                            <p className='sr-only'></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}