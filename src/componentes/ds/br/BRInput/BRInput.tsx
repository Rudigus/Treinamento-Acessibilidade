import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import classNames from "classnames";
import { initBRInput } from "../../common/utils/initializer";

interface BRInputProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const BRInput = forwardRef(
  ({ className, children, style, ...rest }: BRInputProps, ref) => {
    let __element: any = useRef(null);
    let __jsObject: any = null;

    useImperativeHandle(
      ref,
      () => ({
        getJSObject: () => {
          return __jsObject;
        },
      }),
      []
    );

    useEffect(() => {
      if (__element.current) {
        __jsObject = initBRInput(__element.current);
      }
    }, []);

    return (
      <div
        ref={__element}
        className={classNames("br-input", className)}
        style={style}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

BRInput.displayName = "BRInput";

export default BRInput;