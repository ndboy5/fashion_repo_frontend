import styles from "./orderForm.module.css";

function OrderForm() {
  return (
    <form className={styles.container}>
      <div className={styles.title}>
        <h1> ORDER FORM</h1>
      </div>

      <div className={styles.date}>
        <h3> Order Date:</h3>
        <input type="date" class="input" />
      </div>

      <hr />

      <h1>Customer and Billing Information</h1>
      <p>(Please fill appropraitely)</p>
      <div className={styles.name}>
        <h3> Name:</h3>
        <input type="type" class="input" placeholder="First " />
        <input type="type" class="input" placeholder="Last" />
      </div>

      <div className={styles.date}>
        <h3> Phone Number:</h3>
        <input type="type" class="input" placeholder="Phone Number" />
      </div>

      <div className={styles.address}>
        <h3>Address:</h3>
        <input type="type" class="input" />
        <br></br>
        <div className={styles.label}>Street Address</div>
      </div>

      <div className={styles.address}>
        <input type="type" class="input" />
        <br></br>
        <div className={styles.label}>Home Address</div>
      </div>

      <div className={styles.address}>
        <input type="type" class="input" />
        <br></br>
        <div className={styles.label}>City</div>
      </div>
      <div className={styles.address}>
        <input type="type" class="input" />
        <br></br>
        <div className={styles.label}>State / Province / Region</div>
      </div>
    </form>
  );
}
export default OrderForm;
