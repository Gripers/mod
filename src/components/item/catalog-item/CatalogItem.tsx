import styles from "./CatalogItem.module.scss";

import Link from "next/link";
import Image from "next/image";

import { Category } from "@/types/category.type";

type CatalogItemProps = { item: Category };

const CatalogItem = ({ item }: CatalogItemProps) => {
  return (
    <Link href="/" className={styles.catalog__item}>
      <Image src={item.image} alt="" fill />
      <span>{item.name}</span>
    </Link>
  );
};

export default CatalogItem;
