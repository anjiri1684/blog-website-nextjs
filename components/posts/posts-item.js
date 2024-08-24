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

  const imagePath = `/images/posts/${slug}/${image}`;

  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <span>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <title>{formattedDate}</title>
            <p>{excerpt}</p>
          </div>
        </span>
      </Link>
    </li>
  );
}

export default PostItem;
