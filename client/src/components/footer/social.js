
const links = [
  { name: 'facebook', href: 'https://www.facebook.com/', icon: 'fa-facebook-f'},
  { name: 'twitter', href: 'https://twitter.com/', icon: 'fa-twitter'},
  { name: 'linkedin-in', href: 'https://www.linkedin.com/', icon: 'fa-linkedin-in'},
  { name: 'dribbble', href: 'https://dribbble.com/', icon: 'fa-dribbble'},
]

const Social = () => {

  const renderConnect = links.map(item => {
    return <a className="btn btn-outline-light btn-social mx-1" href={item.href} key={item.name}><i className={`fab fa-fw ${item.icon}`}></i></a>
  })

  return (
    <>
      { renderConnect }
    </>
  );
};

export default Social;
