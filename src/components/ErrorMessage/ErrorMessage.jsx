import './ErrorMessage.css';

export default function ErrorMessage({children}) {
    return (
        <div className='error-message'>
            {children}
        </div>
    )
}
