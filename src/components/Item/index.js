import sx from "./Item.module.sass";

const Item = ({id, name, date, text}) => {
  return (
    <div className={sx.item}>
      <div className={sx.imageBox}>
        <img className={sx.image} alt={name} src={`image/item-icon-`+ id + `.png`} />
      </div>
      <div>
        <div className={sx.heading}>{name}</div>
        <div className={sx.body}>{date}</div>
        <div className="text-wrapper">
            <p>Beyond the joy of supporting so many young civic innovators explore their passions and skills, I am grateful for how much time it gave me to explore the roots of civilizational decline and fragility.</p>
            <p></p>
            <p>Given the growing number of existential risks facing Americans and all of humanity, my research has showed me that there may be nothing more important to humanity's long-term flourishing than investing in and building what I call "foundational technologies" that enable hyperlocal resilience, self-sustainability, dynamism, and ecological regeneration.</p>
            <p></p>
            <p>Beyond the joy of supporting so many young civic innovators explore their passions and skills, I am grateful for how much time it gave me to explore the roots of civilizational decline and fragility.</p>
            <p></p>
            <p>Given the growing number of existential risks facing Americans and all of humanity, my research has showed me that there may be nothing more important to humanity's long-term flourishing than investing in and building what I call "foundational technologies" that enable hyperlocal resilience, self-sustainability, dynamism, and ecological regeneration.</p>
        </div>
      </div>
    </div>
  )
};

export default Item;