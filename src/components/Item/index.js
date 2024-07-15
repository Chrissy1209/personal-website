import React from "react";
import sx from "./Item.module.sass";

const Item = ({ id, name, link, date, text }) => {

  return (
    <div className={sx.item}>
      <div className={sx.imageBox}>
        <img className={sx.image} alt={name} src={`image/item-icon-` + id + `.png`} />
      </div>
      <div>
        <div className="title-wrapper">
          <div className={sx.title}>
            {link ? (
              <a className={sx.link} href={link} target="_blank" rel="noreferrer">{name}</a>
            ) : name}
          </div>
          <div className={sx.subTitle}>{date}</div>
          {/* <div>Frontend / Blockchain Engineer Intern</div> */}
        </div>
        <div className={sx.textWrapper}>
          {text}
        </div>
      </div>
    </div>
  )
};

export default Item;