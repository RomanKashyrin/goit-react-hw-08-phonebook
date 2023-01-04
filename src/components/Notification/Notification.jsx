import css from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
    return (
        <div className={css.notification_box}>
            <div className={css.notification_item}>
                <p className={css.notification_text}>{message}</p>
            </div>
        </div>
    );
}

Notification.protoType = {
    message: PropTypes.string,
}

export default Notification;