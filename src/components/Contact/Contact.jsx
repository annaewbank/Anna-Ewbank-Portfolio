import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';
import contact from '../../data/contact.json';

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.content}>
        <p>
          I&apos;m always excited to discuss new projects, share ideas, or
          simply chat about code and technology. Whether you have a potential
          collaboration in mind or just want to connect, I&apos;d love to hear
          from you.
        </p>
        <div className={styles.contactDetails}>
          {contact.map((contact, index) => (
            <a href={contact.url} key={index} target="_blank">
              <img
                src={getImageUrl(contact.imageSrc)}
                alt={`${contact.title} Icon`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
