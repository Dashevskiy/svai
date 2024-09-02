import React from 'react';
import styles from '../styles/AboutPage.module.scss';
import PageHeader from '../components/PageHeader';
import image from '../assets/contacts.png';
import Layout from "../layouts/Layout";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const AboutPage = () => {

  return (
    <Layout keywords={'about'} title={'Про нас'}>
      <PageHeader image={image} title={'Про нас'}/>
      <div className={`${styles.container} ${lato.className}`}>
        <h1>Вироби гвинтові палі, ціна від виробника.</h1>
        <h3>Буріння ям під палі, встановлення гвинтових паль у Києві та по Україні.</h3>
        <p className={styles.paragraph}>Колектив, що працює під торговою маркою Ваші гвинтові палі, це люди, які професійно підходять до вирішення поставлених завдань. Спеціалісти нашої компанії надають повний асортимент послуг зі зведення гвинтового фундаменту. Будучи практиками з необхідними знаннями, ми провели низку досліджень у польових умовах. Це дозволило нам набути безцінного досвіду у вирішенні питань пов'язаних з будівництвом фундаментів, як у технічних моментах самої палі, так і способах монтажу всієї конструкції в цілому, за різних умов, що обмежують. На даний момент ми володіємо всім необхідним обладнанням для виробництва паль, а також оснащенням та спеціальною технікою для їх вкручування.</p>
        <p className={`${styles.paragraph} ${styles.beforeList}`}>При вкручуванні наших паль грунт не розпушується, а навпаки ущільнюється, що надає фундаменту ще більшої міцності і довговічності. Завдяки цим напрацюванням ми дійшли висновку, що фундамент на гвинтових палях ні в чому не поступається традиційному, а в більшості випадків перевершує його і є єдино можливим.
            Якщо розглядати всю технологію в цілому, то вона є високоефективним технічним рішенням, що дозволяє будувати не залежно від сезону:</p>
        <ul className={styles.listContainer}>
            <li className={styles.liItem}>на будь-якому рельєфі без земляних робіт</li>
            <li className={styles.liItem}>у рази швидше</li>
            <li className={styles.liItem}>екологічно чистіше</li>
            <li className={styles.liItem}>економічно вигідніше від 30 до 70 відсотків</li>
            <li className={styles.liItem}>надійно та довговічно</li>
            <li className={styles.liItem}>без обмежень на схилах, проблемних грунтах, у недоступних місцях для великої техніки і т.д.</li>
        </ul>

        <p className={styles.paragraph}>За потреби все можна використати повторно в іншому місці.
        Працюючи за договором, ми гарантуємо виконання всіх взятих на себе зобов'язань, пов'язаних із розробкою, виробництвом та монтажем пальово-гвинтового фундаменту на об'єкті.</p>
        <p className={styles.paragraph}>Виконуємо роботи будь-якої складності, діаметр паль, глибина вкрутки паль та буріння ям, Ви можете погодити з нашим технічним відділом. Дзвоніть, будемо раді співробітництву.</p>
      </div>
    </Layout>
   )
}

export default AboutPage;