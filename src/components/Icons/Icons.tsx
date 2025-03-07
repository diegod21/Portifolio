import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DotNetIcon from "../../images/netIcon.png";
import IconMySql from "../../images/MysqlIcon.png";
import React from "react";

interface IconProps {
  useReact?: boolean;
  useJs?: boolean;
  useTypescript?: boolean;
  useRedux?: boolean;
  useNode?: boolean;
  useNext?: boolean;
  useTailwind?: boolean;
  useHtml?: boolean;
  useCss?: boolean;
  useCsharp?: boolean;
  useEntityFramework?: boolean;
  useMySQL?: boolean;
  useBootstrap?: boolean;
  useAspNet?: boolean;
  size?: string;
  textAlign?: any;
}
const Icons: React.FC<IconProps> = ({
  size,
  useReact,
  useJs,
  useTypescript,
  useRedux,
  useNode,
  useNext,
  useTailwind,
  useHtml,
  useCss,
  useCsharp,
  useEntityFramework,
  useMySQL,
  useBootstrap,
  textAlign,
}) => {
  return (
    <div
      className="icons-container"
      style={{ textAlign: textAlign ? textAlign : "" }}
    >
      {useJs && (
        <FontAwesomeIcon
          icon={faJs}
          style={{ fontSize: size, margin: "0 10px" }}
        />
      )}
      {useReact && (
        <FontAwesomeIcon
          icon={faReact}
          style={{ fontSize: size, margin: "0 10px" }}
        />
      )}
      {useNode && (
        <FontAwesomeIcon
          icon={faNodeJs}
          style={{ fontSize: size, margin: "0 10px" }}
        />
      )}
      {useHtml && (
        <FontAwesomeIcon
          icon={faHtml5}
          style={{ fontSize: size, margin: "0 10px" }}
        />
      )}
      {useCss && (
        <FontAwesomeIcon
          icon={faCss3Alt}
          style={{ fontSize: size, margin: "0 10px" }}
        />
      )}

      {useTypescript && (
        <img
          src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
          alt="TypeScript"
          style={{ width: size, height: size, margin: "0 10px" }}
        />
      )}
      {useTailwind && (
        <img
          src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg"
          alt="Tailwind CSS"
          style={{ width: size, height: size, margin: "0 10px" }}
        />
      )}
      {useRedux && (
        <img
          src="https://cdn.worldvectorlogo.com/logos/redux.svg"
          alt="Redux"
          style={{ width: size, height: size, margin: "0 10px" }}
        />
      )}
      {useNext && (
        <img
          src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
          alt="Next.js"
          style={{ width: size, height: size, margin: "0 10px" }}
        />
      )}
      {useCsharp && (
        <img
          src="https://cdn.worldvectorlogo.com/logos/c--4.svg"
          alt="C#"
          style={{ width: size, height: size, margin: "0 10px" }}
        />
      )}
      {useEntityFramework && (
        <img
          src={DotNetIcon}
          alt="Entity Framework"
          style={{ width: size, height: size, margin: "0 10px" }}
        />
      )}
      {useMySQL && (
        <img
          src={IconMySql}
          alt="MySQL"
          style={{ width: size, height: size, margin: "0 10px" }}
        />
      )}
      {useBootstrap && (
        <img
          src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg"
          alt="Bootstrap"
          style={{ width: size, height: size, margin: "0 10px" }}
        />
      )}
    </div>
  );
};
export default Icons;
