import styles from "@/styles/Products.module.scss";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import { sneakersDB } from "@/db/sneakers.db";
import Filter from "@/components/filter/Filter";
import ProductItem from "@/components/item/product-item/ProductItem";

const ProductsPage = () => {
  return (
    <section id="container" className={styles.products}>
      <div className={styles.products__left}>
        <Accordion>
          <AccordionSummary>
            <Typography>BEKLEIDUNG</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>trojan</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>BEKLEIDUNG</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>trojan</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.products__right}>
        <h2>DAMENBEKLEIDUNG</h2>
        <div className={styles.products__right_banner}>
          <div className={styles.products__right__banner_card}>
            <h2>SIKSILS</h2>
            <Link href="/">ПОДРОБНЕЕ</Link>
          </div>
        </div>
        <Filter />
        <div className={styles.products__right_wrapper}>
          {sneakersDB.map((sneaker) => (
            <ProductItem key={sneaker.id} item={sneaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
