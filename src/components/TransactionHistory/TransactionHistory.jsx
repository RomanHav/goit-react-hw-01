import css from "../TransactionHistory/TransactionHistory.module.css";
import clsx from "clsx";

export default function TransactionHistory({ items, row }) {
  return (
    <table className={css.transactionsTable}>
      <thead className={css.transactionsName}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => {
          return (
            <tr
              className={clsx(
                css.transactionsInfo,
                index % 2 === 0 ? css.transactionseven : css.transactionsodd
              )}
              key={item.id}
            >
              <td className={css.type}>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
