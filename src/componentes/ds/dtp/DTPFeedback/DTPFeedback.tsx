import classNames from "classnames";

export enum DTPFeedbackType {
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  DEFAULT = ''
}

interface FeedbackProps {
  className?: string;
  feedBack?: DTPFeedbackType;
  message?: string;
}

function DTPFeedback(props: FeedbackProps) {
  const { feedBack, className, message } = props;

  const iconFeedback = {
    [DTPFeedbackType.SUCCESS]: 'fa-check-circle',
    [DTPFeedbackType.DANGER]: 'fa-times-circle',
    [DTPFeedbackType.WARNING]: 'fa-exclamation-circle',
    [DTPFeedbackType.INFO]: 'fa-info-circle',
  };

  const icon = iconFeedback[feedBack || DTPFeedbackType.DANGER];

  return (
    <div className="mt-1">
      <span
        className={classNames(`feedback ${feedBack}`, className)}
        role="alert"
      >
        <i className={`fas ${icon}`} aria-hidden="true"></i>
        {message}
      </span>
    </div>
  );
}

DTPFeedback.displayName = 'DTPFeedback';

export default DTPFeedback;