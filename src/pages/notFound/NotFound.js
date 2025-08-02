export default function NotFound() {
  return (
    <div>
      <img src="/notFound.png" alt="Not Found" />
      <button onClick={() => (window.location.href = "/")}>
        Voltar para a Home
      </button>
    </div>
  );
}
