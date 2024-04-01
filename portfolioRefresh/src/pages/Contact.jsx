
 import ContactForm from "../components/Contact";
 import Header from "../components/Header";
 
  

  export default function Contact() {
  return (
    <>
     <section style={{
      padding: '50px',
      backgroundColor: "pink"
     }}>
    <div>

    <Header />
    
      <h1>Contact</h1>
      
      <ContactForm />
      
      
    </div>
    </section>
    </>
  );
}