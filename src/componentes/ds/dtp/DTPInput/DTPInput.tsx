import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import classNames from "classnames";
import DenseType from "../../common/enum/DenseType";
import { initBRInput } from "../../common/utils/initializer";
import DTPFeedback, { DTPFeedbackType } from "../DTPFeedback";
import "../styles/ds.css";

interface DTPInputProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  placeholder?: string;
  value?: string | number | readonly string[];
  disabled?: boolean;
  dense?: DenseType;
  required?: boolean;
  highlight?: boolean;
  icon?: string;
  iconButton?: string;
  inline?: boolean;
  ButtonAction?: () => void;
  feedback?: DTPFeedbackType;
  feedbackMessage?: string;
  isInvalid?: boolean;
  id?: string;
  name?: string;
  maxLength?: number;
  minLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface DTPInputHandle {
  getJSObject: () => void;
}

const DTPInput = forwardRef<DTPInputHandle, DTPInputProps>(
  (
    {
      id,
      name,
      className,
      style,
      label,
      placeholder,
      value,
      disabled = false,
      required,
      highlight = false,
      dense = DenseType.DEFAULT,
      isInvalid = false,
      feedback,
      feedbackMessage,
      icon,
      iconButton,
      inline,
      ButtonAction,
      onChange,
      maxLength,
      minLength,
      ...rest
    }: DTPInputProps,
    ref,
  ) => {
    let __element: any = useRef(null);
    let __jsObject: any = null;

    useImperativeHandle(
      ref,
      () => ({
        getJSObject: () => {
          return __jsObject;
        },
      }),
      [],
    );

    useEffect(() => {
      if (__element.current) {
        __jsObject = initBRInput(__element.current);
      }
    }, []);

    className = classNames(
      className,
      {
        "input-highlight": highlight,
        "input-inline": inline,
        [DTPFeedbackType.DANGER]: isInvalid,
      },
      dense,
      feedback,
    );

    return (
      <>
        <div
          ref={__element}
          className={classNames("br-input", "dtp-input", className)}
          style={style}
        >
          {icon ? (
            <>
              {inline ? (
                <>
                  <div className="input-label">
                    <label>
                      {label}
                      {required && (
                        <i
                          className="fas fa-asterisk custom-asterisk"
                          aria-hidden="true"
                        />
                      )}
                    </label>
                  </div>

                  <div className="input-content">
                    <div className="input-group">
                      <div className="input-icon">
                        <i className={`fas ${icon}`} aria-hidden="true"></i>
                      </div>

                      <input
                        id={`${id}`}
                        name={`${name}`}
                        type="text"
                        value={value}
                        required={required}
                        placeholder={placeholder}
                        disabled={disabled}
                        onChange={onChange}
                        maxLength={maxLength}
                        minLength={minLength}
                        {...rest}
                      />

                      {iconButton && (
                        <button
                          className="br-button"
                          onClick={ButtonAction}
                          aria-label="Button Action"
                        >
                          <i className={classNames("fas ", iconButton)}></i>
                        </button>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <label htmlFor={id}>
                    {label}
                    {required && (
                      <i
                        className="fas fa-asterisk custom-asterisk"
                        aria-hidden="true"
                      />
                    )}
                  </label>

                  <div className="input-group">
                    <div className="input-icon">
                      <i className={`fas ${icon}`} aria-hidden="true"></i>
                    </div>

                    <input
                      id={`${id}`}
                      name={`${name}`}
                      type="text"
                      value={value}
                      placeholder={placeholder}
                      disabled={disabled}
                      required={required}
                      onChange={onChange}
                      maxLength={maxLength}
                      minLength={minLength}
                      {...rest}
                    />

                    {iconButton && (
                      <button
                        className="br-button"
                        onClick={ButtonAction}
                        aria-label="Button Action"
                      >
                        <i className={classNames("fas ", iconButton)}></i>
                      </button>
                    )}
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {inline ? (
                <>
                  <div className="input-label">
                    <label htmlFor={id}>
                      {label}
                      {required && (
                        <i
                          className="fas fa-asterisk custom-asterisk"
                          aria-hidden="true"
                        />
                      )}
                    </label>
                  </div>

                  <div className="input-content">
                    <input
                      id={`${id}`}
                      name={`${name}`}
                      type="text"
                      value={value}
                      required={required}
                      placeholder={placeholder}
                      disabled={disabled}
                      onChange={onChange}
                      maxLength={maxLength}
                      minLength={minLength}
                      {...rest}
                    />

                    {iconButton && (
                      <button
                        className="br-button"
                        onClick={ButtonAction}
                        aria-label="Button Action"
                      >
                        <i className={classNames("fas ", iconButton)}></i>
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <label htmlFor={id}>
                    {label}
                    {required && (
                      <i
                        className="fas fa-asterisk custom-asterisk"
                        aria-hidden="true"
                      />
                    )}
                  </label>

                  <input
                    id={`${id}`}
                    name={`${name}`}
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    onChange={onChange}
                    maxLength={maxLength}
                    minLength={minLength}
                    {...rest}
                  />

                  {iconButton && (
                    <button
                      className="br-button"
                      onClick={ButtonAction}
                      aria-label="Button Action"
                    >
                      <i className={classNames("fas ", iconButton)}></i>
                    </button>
                  )}
                </>
              )}
            </>
          )}
        </div>

        {(isInvalid || feedback) && (
          <DTPFeedback
            feedBack={isInvalid ? DTPFeedbackType.DANGER : feedback}
            message={feedbackMessage}
          />
        )}
      </>
    );
  },
);

DTPInput.displayName = "DTPInput";

export default DTPInput;
