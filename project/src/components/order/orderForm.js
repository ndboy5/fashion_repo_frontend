import styles from "./orderForm.module.css";

function OrderForm() {
  return (
    <form className={styles.container}>
      <section className={styles.headerTop}>
        <div className={styles.logo}>
          <img src="" alt="" />
          <h2>LOGO</h2>
        </div>
      </section>
      <h1> ORDER FORM</h1>

      <div className={styles.date}>
        <h3> Order Date:</h3>
        <input type="date" class="input" />
      </div>

      <h2>Customer and Billing Information</h2>
      <p>(Please fill appropraitely)</p>
      <h3>Contact Name</h3>
      <div className={styles.name}>
        <div className={styles.holder}>
          <input type="type" class="input" placeholder="First " />
          <input type="type" class="input" placeholder="Last" />
        </div>
      </div>

      <div className={styles.address}>
        <h3>Address</h3>
        <input type="type" class="input" />
        <h5>Street Address</h5>
        <input type="type" class="input" />
        <h5>Home Address</h5>
      </div>

      <div className={styles.holder}>
        <div className={styles.name}>
          <input type="type" class="input" placeholder="City" />
          <input type="type" class="input" placeholder="State / Region" />
        </div>

        <div className={styles.name}>
          <input type="type" class="input" placeholder="Postal / Zip Code" />
          <input type="type" class="input" placeholder="Country" />
        </div>
      </div>

      <div className={styles.holder}>
        <div className={styles.phone}>
          <h3> Phone </h3>
          <input type="type" class="input" placeholder="Phone Number" />
        </div>

        <div className={styles.phone}>
          <h3> E- mail</h3>
          <input type="type" class="input" placeholder="gstuyiso@gmail.com" />
        </div>
      </div>
      <button className={styles.btn}>SUBMIT</button>
    </form>
  );
}
export default OrderForm;
