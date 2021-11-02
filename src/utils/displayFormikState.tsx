export const DisplayFormikState = (props: object) => (
  <div style={{ margin: '2rem 0 0' }}>
    <pre
      style={{
        background: '#ccc',
        fontSize: '1.5rem',
        padding: '1rem'
      }}>
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);
