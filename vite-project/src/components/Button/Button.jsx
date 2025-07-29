import styles from "./Button.module.css";

function Button(props) {
    const { type, disabled, onClick, children } = props;

    return (
        <button
            className={styles.button}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            <span>{children}</span>
        </button>
    );
}

export default Button;
