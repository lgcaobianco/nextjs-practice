import Link from "next/link";

function Pilots({ pilots }) {
  return (
    <section>
      <h1>Hello!</h1>
      <p>We will show a list of pilots in this app</p>
      <Link href="/login">
        <a>Click here to login!</a>
      </Link>
      {pilots.map((pilot) => {
        return (
          <li key={pilot.id}>
            Pilot name is {pilot.name} and he has {pilot.titles}
          </li>
        );
      })}
    </section>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3001/pilots", {
    headers: {
      Authorization: "eyJleHBpcmF0aW9uRGF0ZSI6MTY0MjY0NDQzNDgwN30=",
    },
  });
  console.log(res);
  const pilots = await res.json();

  return {
    props: {
      pilots: pilots,
    },
  };
}

export default Pilots;
