import Link from "next/link";
import Image from "next/image";
import classes from "./posts-item.module.css";

function PostItem(props) {
  const { image, title, date, excerpt, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <li className={classes.post}>
      <Link>
        <span>
          <div className={classes.image}>
            <Image src={image} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <title>{date}</title>
            <p>{excerpt}</p>
          </div>
        </span>
      </Link>
    </li>
  );
}

export default PostItem;
