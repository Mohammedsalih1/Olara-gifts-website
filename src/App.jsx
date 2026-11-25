// import { useEffect, useState } from 'react';
// import { Facebook, Instagram, House, Gift, Info, Mail, ShoppingCart, Truck, Heart, Send, UserRound, Phone, PackageCheck, CalendarDays, X, Gem } from 'lucide-react';

// const assets = '/assets/';
// const products = [
//   { key: 'bouquet', image: 'product-bouquet.jpg', en: 'Flower Bouquet', ar: 'باقة زهور' },
//   { key: 'giftbox', image: 'product-gift-box.jpg', en: 'Gift Box', ar: 'صندوق هدايا' },
//   { key: 'arrangement', image: 'product-arrangement.jpg', en: 'Luxury Arrangement', ar: 'تنسيق فاخر' },
//   { key: 'personalized', image: 'product-personalized.jpg', en: 'Personalized Gifts', ar: 'هدايا مخصصة' },
// ];
// const paymentOptions = [
//   { id: 'bankak', en: 'Bankak', ar: 'بنكك', image: 'payment-bankak.jpg' },
//   { id: 'fawry', en: 'Fawry', ar: 'فوري', image: 'payment-fawry.png' },
//   { id: 'instapay', en: 'InstaPay', ar: 'إنستا باي', image: 'payment-instapay.jpg' },
//   { id: 'oocash', en: 'O-Cash', ar: 'أو كاش', image: 'payment-oocash.jpg' },
//   { id: 'vodafone', en: 'Vodafone Cash', ar: 'فودافون كاش', image: 'payment-vodafone-cash.jpg' },
//   { id: 'cash', en: 'Pay cash', ar: 'ادفع كاش', image: 'cash-pay.jpg' },
// ];

// const copy = {
//   en: {
//     home: 'Home', gifts: 'Our Gifts', about: 'Our Promise', contact: 'Contact', orders: 'My Orders',
//     eyebrow: 'A little joy, beautifully wrapped', title: 'Olara Gifts', slogan: 'Give More · With Love', arabicLine: 'لأن أجمل المشاعر تستحق أجمل التفاصيل!',
//     collection: 'Our Gifts', order: 'Order Your Gift', intro: 'Tell us what you have in mind and we’ll make it personal.',
//     name: 'Full Name', phone: 'Phone Number', giftType: 'Gift Type', giftPlaceholder: 'Select a gift type', occasion: 'Occasion', occasionPlaceholder: 'Select an occasion',
//     message: 'Your Message', messageHint: 'Write a little note for your gift…', delivery: 'How should it arrive?', deliver: 'Delivery', pickup: 'Pickup',
//     notes: 'Additional Notes', notesHint: 'Any special requests?', payment: 'Choose a payment method', required: 'Required', place: 'Place Order',
//     quality: 'A thoughtful touch', love: 'Made with love', fast: 'Across Khartoum', thanks: 'Thank you for choosing Olara Gifts',
//     giftChoices: ['Flower Bouquet', 'Gift Box', 'Luxury Arrangement', 'Personalized Gifts'],
//     occasionChoices: ['Birthday', 'Anniversary', 'Graduation', 'Wedding', 'Thank you', 'Just because', 'Other'],
//     paymentRequired: 'Please choose a payment method.',
//     invalid: 'Please complete all required fields with a valid phone number.',
//     envelopeHeading: 'A note from Olara',
//     complete: 'إتمام الطلب',
//     close: 'Close',
//     namePlaceholder: 'Your name', phonePlaceholder: '+249 …',
//     orderMessage: 'Hello Olara Gifts! I would like to place an order:',
//     labels: ['Name', 'Phone', 'Gift', 'Occasion', 'Message', 'Delivery', 'Notes', 'Payment'],
//     deliveryChoices: ['Delivery', 'Pickup'],
//   },
//   ar: {
//     home: 'الرئيسية', gifts: 'هدايانا', about: 'وعدنا لكم', contact: 'تواصل معنا', orders: 'طلباتي',
//     eyebrow: 'فرحة صغيرة، بتفاصيل جميلة', title: 'أولارا للهدايا', slogan: 'نهدي أكثر · بكل حب', arabicLine: 'لأن أجمل المشاعر تستحق أجمل التفاصيل!',
//     collection: 'هدايانا', order: 'اطلب هديتك', intro: 'أخبرنا بما تفكر فيه، وسنجعله هدية مميزة.',
//     name: 'الاسم الكامل', phone: 'رقم الهاتف', giftType: 'نوع الهدية', giftPlaceholder: 'اختر نوع الهدية', occasion: 'المناسبة', occasionPlaceholder: 'اختر المناسبة',
//     message: 'رسالتك', messageHint: 'اكتب كلماتك الجميلة مع الهدية…', delivery: 'طريقة الاستلام', deliver: 'توصيل', pickup: 'استلام',
//     notes: 'ملاحظات إضافية', notesHint: 'أي طلبات خاصة؟', payment: 'اختر طريقة الدفع', required: 'مطلوب', place: 'اطلب الآن',
//     quality: 'تفاصيل تليق بمناسبتك', love: 'صُنعت بكل حب', fast: 'في أنحاء الخرطوم', thanks: 'شكراً لاختياركم أولارا للهدايا',
//     giftChoices: ['باقة زهور', 'صندوق هدايا', 'تنسيق فاخر', 'هدايا مخصصة'],
//     occasionChoices: ['عيد ميلاد', 'ذكرى سنوية', 'تخرج', 'زفاف', 'شكراً', 'بدون مناسبة', 'أخرى'],
//     paymentRequired: 'يرجى اختيار طريقة الدفع.',
//     invalid: 'يرجى تعبئة الحقول المطلوبة وإدخال رقم هاتف صحيح.',
//     envelopeHeading: 'رسالة من أولارا',
//     complete: 'إتمام الطلب',
//     close: 'إغلاق',
//     namePlaceholder: 'اسمك', phonePlaceholder: '+249 …',
//     orderMessage: 'مرحباً أولارا للهدايا! أود تأكيد تفاصيل طلبي:',
//     labels: ['الاسم', 'الهاتف', 'الهدية', 'المناسبة', 'الرسالة', 'الاستلام', 'ملاحظات', 'الدفع'],
//     deliveryChoices: ['توصيل', 'استلام'],
//   },
// };

// function App() {
//   const [lang, setLang] = useState('en');
//   const [payment, setPayment] = useState('');
//   const [paymentError, setPaymentError] = useState(false);
//   const [stage, setStage] = useState('idle');
//   const [customerName, setCustomerName] = useState('');
//   const t = copy.en;
//   const formT = copy[lang];
//   const rtl = lang === 'ar';

//   useEffect(() => {
//     if (stage !== 'flying') return undefined;
//     const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
//     const timer = window.setTimeout(() => setStage('letter'), reduced ? 50 : 2200);
//     return () => window.clearTimeout(timer);
//   }, [stage]);

//   const startOrder = (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     if (!form.reportValidity()) {
//       return;
//     }
//     if (!payment) {
//       setPaymentError(true);
//       document.getElementById('payment-methods')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       return;
//     }
//     setPaymentError(false);
//     const formData = new FormData(form);
//     setCustomerName(String(formData.get('name') || '').trim());
//     setStage('flying');
//   };

//   const messageForWhatsApp = () => {
//     const form = document.getElementById('gift-order-form');
//     const data = new FormData(form);
//     const giftId = String(data.get('gift') || '');
//     const giftIndex = products.findIndex((product) => product.key === giftId);
//     const occasionIndex = Number(String(data.get('occasion') || '').replace('occasion-', ''));
//     const fulfillmentIndex = data.get('fulfillment') === 'pickup' ? 1 : 0;
//     const details = [
//       `${formT.labels[0]}: ${data.get('name')}`,
//       `${formT.labels[1]}: ${data.get('phone')}`,
//       `${formT.labels[2]}: ${formT.giftChoices[giftIndex] || giftId}`,
//       `${formT.labels[3]}: ${formT.occasionChoices[occasionIndex] || data.get('occasion')}`,
//       `${formT.labels[4]}: ${data.get('message') || '—'}`,
//       `${formT.labels[5]}: ${formT.deliveryChoices[fulfillmentIndex]}`,
//       `${formT.labels[6]}: ${data.get('notes') || '—'}`,
//       `${formT.labels[7]}: ${paymentOptions.find((option) => option.id === payment)?.[lang] || payment}`,
//     ];
//     return `${formT.orderMessage}\n\n${details.join('\n')}`;
//   };

//   const continueToWhatsApp = () => {
//     const url = `https://wa.me/249112211378?text=${encodeURIComponent(messageForWhatsApp())}`;
//     window.open(url, '_blank', 'noopener,noreferrer');
//   };

//   const chooseProduct = (product) => {
//     const selector = document.getElementById('gift-type');
//     if (selector) selector.value = product.key;
//     document.getElementById('order')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     selector?.focus({ preventScroll: true });
//   };

//   return (
//     <div className="site-shell min-h-screen w-full" dir="ltr">
//       <div className="butterfly-flight" aria-hidden="true" data-testid="animation-butterfly">
//         <img src={`${assets}butterfly.png`} alt="" draggable="false" />
//       </div>
//       <header className="topbar">
//         <a href="#top" aria-label="Olara Gifts home" data-testid="link-brand-home">
//           <img className="brand-logo" src={`${assets}olara-logo-transparent.png`} alt="Olara Gifts" />
//         </a>
//           <nav className="nav-links" aria-label="Main navigation">
//           {/* <a href="#top" data-testid="link-home"><House />{t.home}</a>
//           <a href="#gifts" data-testid="link-gifts"><Gift />{t.gifts}</a>
//           <a href="#promise" data-testid="link-promise"><Info />{t.about}</a>
//           <a href="#contact" data-testid="link-contact"><Mail />{t.contact}</a> */}
//         </nav>
//         <div className="top-actions">
//           <div className="socials">
//             <a className="social-link" href="https://www.facebook.com/OLARAGIFTS112" target="_blank" rel="noreferrer" aria-label="Olara Gifts on Facebook" data-testid="link-facebook"><Facebook /></a>
//             <a className="social-link" href="https://www.instagram.com/olaragifts112?gwpx=ZTF6eTd5am1yMmVn" target="_blank" rel="noreferrer" aria-label="Olara Gifts on Instagram" data-testid="link-instagram"><Instagram /></a>
//           </div>
//           <button className="language-toggle" type="button" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} data-testid="button-language-toggle" aria-label={rtl ? 'Switch order form to English' : 'Switch order form to Arabic'} aria-pressed={rtl}>
//             {rtl ? 'AR' : 'EN'}
//           </button>
//         </div>
//       </header>

//       <main id="top">
//         <section className="hero" aria-labelledby="hero-title">
//           <div className="hero-copy">
//             <div className="eyebrow">{t.eyebrow}</div>
//             <h1 id="hero-title">{t.title}</h1>
//             <p className="hero-script">{t.slogan} <span>♡</span></p>
//             <p className="hero-arabic arabic" dir="rtl">{t.arabicLine}</p>
//           </div>
//           <div className="hero-mark">Made for your moment</div>
//         </section>

//         <div className="content-wrap">
//           <div className="main-grid">
//             <section className="collection" id="gifts" aria-labelledby="gifts-title">
//               <h2 className="section-title" id="gifts-title">{t.collection}</h2>
//               <div className="gift-grid">
//                 {products.map((product, index) => (
//                   <article className="gift-card" key={product.key} data-testid={`card-gift-${product.key}`}>
//                     <img src={`${assets}${product.image}`} alt={product.en} data-testid={`img-gift-${product.key}`} />
//                     <div className="gift-label">
//                       <span>{product.en}</span>
//                       <button type="button" onClick={() => chooseProduct(product)} aria-label={`Choose ${product.en}`} data-testid={`button-select-${product.key}`}><ShoppingCart /></button>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             </section>

//             <section className="order-card" id="order" aria-labelledby="order-title" dir={rtl ? 'rtl' : 'ltr'} lang={lang}>
//               {/* <div className="order-heading">
//                 <span className="order-icon"><Gift /></span>
//                 <h2 id="order-title">{formT.order}</h2>
//               </div> */}
//               <div className="order-heading">
//                 <span className="order-icon" aria-hidden="true">
//                   <Gift strokeWidth={1.85} />
//                 </span>
//                 <h2 id="order-title">{formT.order}</h2>
//               </div>
//               <p className="form-intro">{formT.intro}</p>
//               <form id="gift-order-form" onSubmit={startOrder} noValidate data-testid="form-gift-order">
//                 <div className="form-grid">
//                   <div className="field">
//                     <label htmlFor="customer-name">{formT.name} <span className="required">*</span></label>
//                     <div className="input-wrap"><UserRound /><input id="customer-name" name="name" type="text" required minLength="2" autoComplete="name" placeholder={formT.namePlaceholder} data-testid="input-name" onChange={(event) => setCustomerName(event.target.value)} /></div>
//                   </div>
//                   <div className="field">
//                     <label htmlFor="customer-phone">{formT.phone} <span className="required">*</span></label>
//                     <div className="input-wrap"><Phone /><input id="customer-phone" name="phone" type="tel" required pattern="[+0-9 ()-]{7,20}" autoComplete="tel" placeholder={formT.phonePlaceholder} data-testid="input-phone" /></div>
//                   </div>
//                   <div className="field full">
//                     <label htmlFor="gift-type">{formT.giftType} <span className="required">*</span></label>
//                     <div className="select-wrap"><Gift aria-hidden="true" /><select id="gift-type" name="gift" required defaultValue="" data-testid="select-gift-type"><option value="" disabled>{formT.giftPlaceholder}</option>{formT.giftChoices.map((choice, index) => <option key={products[index].key} value={products[index].key}>{choice}</option>)}</select></div>
//                   </div>
//                   <div className="field full">
//                     <label htmlFor="occasion">{formT.occasion} <span className="required">*</span></label>
//                     <div className="select-wrap"><CalendarDays aria-hidden="true" /><select id="occasion" name="occasion" required defaultValue="" data-testid="select-occasion"><option value="" disabled>{formT.occasionPlaceholder}</option>{formT.occasionChoices.map((choice, index) => <option key={index} value={`occasion-${index}`}>{choice}</option>)}</select></div>
//                   </div>
//                   <div className="field full">
//                     <label htmlFor="gift-message">{formT.message}</label>
//                     <textarea id="gift-message" name="message" placeholder={formT.messageHint} data-testid="input-message" />
//                   </div>
//                   <fieldset className="field full" style={{ border: 0, padding: 0, margin: 0 }}>
//                     <legend className="group-label">{formT.delivery}</legend>
//                     <div className="choice-row">
//                       <label className="radio-choice"><input type="radio" name="fulfillment" value="delivery" defaultChecked data-testid="radio-delivery" />{formT.deliver}</label>
//                       <label className="radio-choice"><input type="radio" name="fulfillment" value="pickup" data-testid="radio-pickup" />{formT.pickup}</label>
//                     </div>
//                   </fieldset>
//                   <div className="field full">
//                     <label htmlFor="extra-notes">{formT.notes}</label>
//                     <div className="input-wrap"><PackageCheck /><input id="extra-notes" name="notes" type="text" placeholder={formT.notesHint} data-testid="input-notes" /></div>
//                   </div>
//                   <div className="field full" id="payment-methods">
//                     <span className="group-label">{formT.payment} <span className="required">*</span></span>
//                     <div className="payment-grid" role="radiogroup" aria-label={formT.payment} aria-required="true">
//                       {paymentOptions.map((option) => (
//                         <label className={`payment-option ${payment === option.id ? 'selected' : ''}`} key={option.id} data-testid={`option-payment-${option.id}`}>
//                            <input type="radio" name="payment-method" value={option.id} checked={payment === option.id} onChange={() => { setPayment(option.id); setPaymentError(false); }} aria-label={rtl ? option.ar : option.en} />
//                            <img src={`${assets}${option.image}`} alt={rtl ? option.ar : option.en} />
//                            <span>{rtl ? option.ar : option.en}</span>
//                         </label>
//                       ))}
//                     </div>
//                     <div className="payment-error" role="alert" data-testid="error-payment">{paymentError ? formT.paymentRequired : ''}</div>
//                   </div>
//                 </div>
//                 <button type="submit" className="place-order" data-testid="button-place-order"><Send />{formT.place}</button>
//               </form>
//             </section>
//           </div>
//         </div>
//       </main>

//       <footer className="footer-band" id="promise">
//         <div className="footer-perks">
//           <div className="perk"><Gem />{t.quality}</div>
//           <div className="perk"><Heart />{t.love}</div>
//           <div className="perk"><Truck />{t.fast}</div>
//         </div>
//         <div className="footer-thanks">{t.thanks} <span>♡</span></div>
//         <span id="contact" className="footer-contact" data-testid="text-contact">0112211378</span>
//       </footer>

//       {stage !== 'idle' && (
//         <div className="overlay" role="dialog" aria-modal="true" aria-label={stage === 'flying' ? t.place : t.envelopeHeading} data-testid="modal-order-thanks">
//           {stage === 'flying' ? (
//             <div className="brand-mark-animation" aria-label="Sending your note on its way" data-testid="animation-telegram-plane">
//               <span className="brand-mark-o" aria-hidden="true">O</span>
//               <Send className="brand-mark-plane" aria-hidden="true" />
//             </div>
//           ) : (
//             <>
//               <button className="overlay-close" type="button" onClick={() => setStage('idle')} aria-label={t.close} data-testid="button-close-thanks"><X /></button>
//               <div className="envelope-scene">
//                 <div className="envelope" aria-hidden="true"><div className="letter"><h2>{t.envelopeHeading}</h2><p className="arabic" dir="rtl">مرحبا {customerName}. شكرا علي اختيارك لي olara gifts ممتنين جدا لانك اخترتنا ومشكور جدا جدا.</p></div></div>
//                 <button type="button" className="complete-button" onClick={continueToWhatsApp} data-testid="button-complete-order">{t.complete}</button>
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, House, Gift, Info, Mail, ShoppingCart, Truck, Heart, Send, UserRound, Phone, PackageCheck, CalendarDays, X, Gem } from 'lucide-react';

const assets = '/assets/';
const products = [
  { key: 'bouquet', image: 'product-bouquet.jpg', en: 'Flower Bouquet', ar: 'باقة زهور' },
  { key: 'giftbox', image: 'product-gift-box.jpg', en: 'Gift Box', ar: 'صندوق هدايا' },
  { key: 'arrangement', image: 'product-arrangement.jpg', en: 'Luxury Arrangement', ar: 'تنسيق فاخر' },
  { key: 'personalized', image: 'product-personalized.jpg', en: 'Personalized Gifts', ar: 'هدايا مخصصة' },
];
const paymentOptions = [
  { id: 'bankak', en: 'Bankak', ar: 'بنكك', image: 'payment-bankak.jpg' },
  { id: 'fawry', en: 'Fawry', ar: 'فوري', image: 'payment-fawry.png' },
  { id: 'instapay', en: 'InstaPay', ar: 'إنستا باي', image: 'payment-instapay.jpg' },
  { id: 'oocash', en: 'O-Cash', ar: 'أو كاش', image: 'payment-oocash.jpg' },
  { id: 'vodafone', en: 'Vodafone Cash', ar: 'فودافون كاش', image: 'payment-vodafone-cash.jpg' },
  { id: 'cash', en: 'Pay cash', ar: 'ادفع كاش', image: 'cash-pay.jpg' },
];

const copy = {
  en: {
    home: 'Home', gifts: 'Our Gifts', about: 'Our Promise', contact: 'Contact', orders: 'My Orders',
    eyebrow: 'A little joy, beautifully wrapped', title: 'Olara Gifts', slogan: 'Give More · With Love', arabicLine: 'لأن أجمل المشاعر تستحق أجمل التفاصيل!',
    collection: 'Our Gifts', order: 'Order Your Gift', intro: 'Tell us what you have in mind and we’ll make it personal.',
    name: 'Full Name', phone: 'Phone Number', giftType: 'Gift Type', giftPlaceholder: 'Select a gift type', occasion: 'Occasion', occasionPlaceholder: 'Select an occasion',
    message: 'Your Message', messageHint: 'Write a little note for your gift…', delivery: 'How should it arrive?', deliver: 'Delivery', pickup: 'Pickup',
    notes: 'Additional Notes', notesHint: 'Any special requests?', payment: 'Choose a payment method', required: 'Required', place: 'Place Order',
    quality: 'A thoughtful touch', love: 'Made with love', fast: 'Across Khartoum', thanks: 'Thank you for choosing Olara Gifts',
    giftChoices: ['Flower Bouquet', 'Gift Box', 'Luxury Arrangement', 'Personalized Gifts'],
    occasionChoices: ['Birthday', 'Anniversary', 'Graduation', 'Wedding', 'Thank you', 'Just because', 'Other'],
    paymentRequired: 'Please choose a payment method.',
    invalid: 'Please complete all required fields with a valid phone number.',
    envelopeHeading: 'A note from Olara',
    complete: 'إتمام الطلب',
    close: 'Close',
    namePlaceholder: 'Your name', phonePlaceholder: '+249 …',
    orderMessage: 'Hello Olara Gifts! I would like to place an order:',
    labels: ['Name', 'Phone', 'Gift', 'Occasion', 'Message', 'Delivery', 'Notes', 'Payment'],
    deliveryChoices: ['Delivery', 'Pickup'],
  },
  ar: {
    home: 'الرئيسية', gifts: 'هدايانا', about: 'وعدنا لكم', contact: 'تواصل معنا', orders: 'طلباتي',
    eyebrow: 'فرحة صغيرة، بتفاصيل جميلة', title: 'أولارا للهدايا', slogan: 'نهدي أكثر · بكل حب', arabicLine: 'لأن أجمل المشاعر تستحق أجمل التفاصيل!',
    collection: 'هدايانا', order: 'اطلب هديتك', intro: 'أخبرنا بما تفكر فيه، وسنجعله هدية مميزة.',
    name: 'الاسم الكامل', phone: 'رقم الهاتف', giftType: 'نوع الهدية', giftPlaceholder: 'اختر نوع الهدية', occasion: 'المناسبة', occasionPlaceholder: 'اختر المناسبة',
    message: 'رسالتك', messageHint: 'اكتب كلماتك الجميلة مع الهدية…', delivery: 'طريقة الاستلام', deliver: 'توصيل', pickup: 'استلام',
    notes: 'ملاحظات إضافية', notesHint: 'أي طلبات خاصة؟', payment: 'اختر طريقة الدفع', required: 'مطلوب', place: 'اطلب الآن',
    quality: 'تفاصيل تليق بمناسبتك', love: 'صُنعت بكل حب', fast: 'في أنحاء الخرطوم', thanks: 'شكراً لاختياركم أولارا للهدايا',
    giftChoices: ['باقة زهور', 'صندوق هدايا', 'تنسيق فاخر', 'هدايا مخصصة'],
    occasionChoices: ['عيد ميلاد', 'ذكرى سنوية', 'تخرج', 'زفاف', 'شكراً', 'بدون مناسبة', 'أخرى'],
    paymentRequired: 'يرجى اختيار طريقة الدفع.',
    invalid: 'يرجى تعبئة الحقول المطلوبة وإدخال رقم هاتف صحيح.',
    envelopeHeading: 'رسالة من أولارا',
    complete: 'إتمام الطلب',
    close: 'إغلاق',
    namePlaceholder: 'اسمك', phonePlaceholder: '+249 …',
    orderMessage: 'مرحباً أولارا للهدايا! أود تأكيد تفاصيل طلبي:',
    labels: ['الاسم', 'الهاتف', 'الهدية', 'المناسبة', 'الرسالة', 'الاستلام', 'ملاحظات', 'الدفع'],
    deliveryChoices: ['توصيل', 'استلام'],
  },
};

const softEase = [0.22, 1, 0.36, 1];

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: softEase },
  },
};

const giftGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const giftCardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: softEase },
  },
};

function App() {
  const [lang, setLang] = useState('en');
  const [payment, setPayment] = useState('');
  const [paymentError, setPaymentError] = useState(false);
  const [stage, setStage] = useState('idle');
  const [customerName, setCustomerName] = useState('');
  const t = copy.en;
  const formT = copy[lang];
  const rtl = lang === 'ar';

  useEffect(() => {
    if (stage !== 'flying') return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = window.setTimeout(() => setStage('letter'), reduced ? 50 : 2200);
    return () => window.clearTimeout(timer);
  }, [stage]);

  const startOrder = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      return;
    }
    if (!payment) {
      setPaymentError(true);
      document.getElementById('payment-methods')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setPaymentError(false);
    const formData = new FormData(form);
    setCustomerName(String(formData.get('name') || '').trim());
    setStage('flying');
  };

  const messageForWhatsApp = () => {
    const form = document.getElementById('gift-order-form');
    const data = new FormData(form);
    const giftId = String(data.get('gift') || '');
    const giftIndex = products.findIndex((product) => product.key === giftId);
    const occasionIndex = Number(String(data.get('occasion') || '').replace('occasion-', ''));
    const fulfillmentIndex = data.get('fulfillment') === 'pickup' ? 1 : 0;
    const details = [
      `${formT.labels[0]}: ${data.get('name')}`,
      `${formT.labels[1]}: ${data.get('phone')}`,
      `${formT.labels[2]}: ${formT.giftChoices[giftIndex] || giftId}`,
      `${formT.labels[3]}: ${formT.occasionChoices[occasionIndex] || data.get('occasion')}`,
      `${formT.labels[4]}: ${data.get('message') || '—'}`,
      `${formT.labels[5]}: ${formT.deliveryChoices[fulfillmentIndex]}`,
      `${formT.labels[6]}: ${data.get('notes') || '—'}`,
      `${formT.labels[7]}: ${paymentOptions.find((option) => option.id === payment)?.[lang] || payment}`,
    ];
    return `${formT.orderMessage}\n\n${details.join('\n')}`;
  };

  const continueToWhatsApp = () => {
    const url = `https://wa.me/249112211378?text=${encodeURIComponent(messageForWhatsApp())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const chooseProduct = (product) => {
    const selector = document.getElementById('gift-type');
    if (selector) selector.value = product.key;
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    selector?.focus({ preventScroll: true });
  };

  return (
    <div className="site-shell min-h-screen w-full" dir="ltr">
      <motion.div
        className="butterfly-flight"
        aria-hidden="true"
        data-testid="animation-butterfly"
        animate={{
          y: [0, -8, 2, -6, 0],
          rotate: [-2, 3, -1, 2, -2],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <img src={`${assets}butterfly.png`} alt="" draggable="false" />
      </motion.div>

      <motion.header
        className="topbar"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: softEase }}
      >
        <a href="#top" aria-label="Olara Gifts home" data-testid="link-brand-home">
          <motion.img
            className="brand-logo"
            src={`${assets}olara-logo-transparent.png`}
            alt="Olara Gifts"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: softEase }}
          />
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {/* <a href="#top" data-testid="link-home"><House />{t.home}</a>
          <a href="#gifts" data-testid="link-gifts"><Gift />{t.gifts}</a>
          <a href="#promise" data-testid="link-promise"><Info />{t.about}</a>
          <a href="#contact" data-testid="link-contact"><Mail />{t.contact}</a> */}
        </nav>
        <div className="top-actions">
          <div className="socials">
            <motion.a
              className="social-link"
              href="https://www.facebook.com/OLARAGIFTS112"
              target="_blank"
              rel="noreferrer"
              aria-label="Olara Gifts on Facebook"
              data-testid="link-facebook"
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.2 }}
            >
              <Facebook />
            </motion.a>
            <motion.a
              className="social-link"
              href="https://www.instagram.com/olaragifts112?gwpx=ZTF6eTd5am1yMmVn"
              target="_blank"
              rel="noreferrer"
              aria-label="Olara Gifts on Instagram"
              data-testid="link-instagram"
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.2 }}
            >
              <Instagram />
            </motion.a>
          </div>
          <motion.button
            className="language-toggle"
            type="button"
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            data-testid="button-language-toggle"
            aria-label={rtl ? 'Switch order form to English' : 'Switch order form to Arabic'}
            aria-pressed={rtl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.2 }}
          >
            {rtl ? 'AR' : 'EN'}
          </motion.button>
        </div>
      </motion.header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <motion.div
            className="hero-copy"
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="eyebrow" variants={heroItemVariants}>{t.eyebrow}</motion.div>
            <motion.h1 id="hero-title" variants={heroItemVariants}>{t.title}</motion.h1>
            <motion.p className="hero-script" variants={heroItemVariants}>
              {t.slogan}{' '}
              <motion.span
                style={{ display: 'inline-block' }}
                animate={{ scale: [1, 1.22, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                ♡
              </motion.span>
            </motion.p>
            <motion.p className="hero-arabic arabic" dir="rtl" variants={heroItemVariants}>{t.arabicLine}</motion.p>
          </motion.div>
          <motion.div
            className="hero-mark"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: softEase }}
          >
            Made for your moment
          </motion.div>
        </section>

        <div className="content-wrap">
          <div className="main-grid">
            <section className="collection" id="gifts" aria-labelledby="gifts-title">
              <motion.h2
                className="section-title"
                id="gifts-title"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: softEase }}
              >
                {t.collection}
              </motion.h2>
              <motion.div
                className="gift-grid"
                variants={giftGridVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                {products.map((product, index) => (
                  <motion.article
                    className="gift-card"
                    key={product.key}
                    data-testid={`card-gift-${product.key}`}
                    variants={giftCardVariants}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3, ease: softEase }}
                  >
                    <img src={`${assets}${product.image}`} alt={product.en} data-testid={`img-gift-${product.key}`} />
                    <div className="gift-label">
                      <span>{product.en}</span>
                      <motion.button
                        type="button"
                        onClick={() => chooseProduct(product)}
                        aria-label={`Choose ${product.en}`}
                        data-testid={`button-select-${product.key}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.18 }}
                      >
                        <ShoppingCart />
                      </motion.button>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </section>

            <motion.section
              className="order-card"
              id="order"
              aria-labelledby="order-title"
              dir={rtl ? 'rtl' : 'ltr'}
              lang={lang}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, ease: softEase }}
            >
              {/* <div className="order-heading">
                <span className="order-icon"><Gift /></span>
                <h2 id="order-title">{formT.order}</h2>
              </div> */}
              <div className="order-heading">
                <motion.span
                  className="order-icon"
                  aria-hidden="true"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.06 }}
                  transition={{ duration: 0.45 }}
                >
                  <Gift strokeWidth={1.85} />
                </motion.span>
                <h2 id="order-title">{formT.order}</h2>
              </div>
              <p className="form-intro">{formT.intro}</p>
              <form id="gift-order-form" onSubmit={startOrder} noValidate data-testid="form-gift-order">
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="customer-name">{formT.name} <span className="required">*</span></label>
                    <div className="input-wrap"><UserRound /><input id="customer-name" name="name" type="text" required minLength="2" autoComplete="name" placeholder={formT.namePlaceholder} data-testid="input-name" onChange={(event) => setCustomerName(event.target.value)} /></div>
                  </div>
                  <div className="field">
                    <label htmlFor="customer-phone">{formT.phone} <span className="required">*</span></label>
                    <div className="input-wrap"><Phone /><input id="customer-phone" name="phone" type="tel" required pattern="[+0-9 ()-]{7,20}" autoComplete="tel" placeholder={formT.phonePlaceholder} data-testid="input-phone" /></div>
                  </div>
                  <div className="field full">
                    <label htmlFor="gift-type">{formT.giftType} <span className="required">*</span></label>
                    <div className="select-wrap"><Gift aria-hidden="true" /><select id="gift-type" name="gift" required defaultValue="" data-testid="select-gift-type"><option value="" disabled>{formT.giftPlaceholder}</option>{formT.giftChoices.map((choice, index) => <option key={products[index].key} value={products[index].key}>{choice}</option>)}</select></div>
                  </div>
                  <div className="field full">
                    <label htmlFor="occasion">{formT.occasion} <span className="required">*</span></label>
                    <div className="select-wrap"><CalendarDays aria-hidden="true" /><select id="occasion" name="occasion" required defaultValue="" data-testid="select-occasion"><option value="" disabled>{formT.occasionPlaceholder}</option>{formT.occasionChoices.map((choice, index) => <option key={index} value={`occasion-${index}`}>{choice}</option>)}</select></div>
                  </div>
                  <div className="field full">
                    <label htmlFor="gift-message">{formT.message}</label>
                    <textarea id="gift-message" name="message" placeholder={formT.messageHint} data-testid="input-message" />
                  </div>
                  <fieldset className="field full" style={{ border: 0, padding: 0, margin: 0 }}>
                    <legend className="group-label">{formT.delivery}</legend>
                    <div className="choice-row">
                      <label className="radio-choice"><input type="radio" name="fulfillment" value="delivery" defaultChecked data-testid="radio-delivery" />{formT.deliver}</label>
                      <label className="radio-choice"><input type="radio" name="fulfillment" value="pickup" data-testid="radio-pickup" />{formT.pickup}</label>
                    </div>
                  </fieldset>
                  <div className="field full">
                    <label htmlFor="extra-notes">{formT.notes}</label>
                    <div className="input-wrap"><PackageCheck /><input id="extra-notes" name="notes" type="text" placeholder={formT.notesHint} data-testid="input-notes" /></div>
                  </div>
                  <div className="field full" id="payment-methods">
                    <span className="group-label">{formT.payment} <span className="required">*</span></span>
                    <div className="payment-grid" role="radiogroup" aria-label={formT.payment} aria-required="true">
                      {paymentOptions.map((option) => (
                        <motion.label
                          className={`payment-option ${payment === option.id ? 'selected' : ''}`}
                          key={option.id}
                          data-testid={`option-payment-${option.id}`}
                          whileHover={{ y: -2, scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ duration: 0.18, ease: softEase }}
                        >
                          <input type="radio" name="payment-method" value={option.id} checked={payment === option.id} onChange={() => { setPayment(option.id); setPaymentError(false); }} aria-label={rtl ? option.ar : option.en} />
                          <img src={`${assets}${option.image}`} alt={rtl ? option.ar : option.en} />
                          <span>{rtl ? option.ar : option.en}</span>
                        </motion.label>
                      ))}
                    </div>
                    <AnimatePresence>
                      {paymentError && (
                        <motion.div
                          className="payment-error"
                          role="alert"
                          data-testid="error-payment"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.2 }}
                        >
                          {formT.paymentRequired}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <motion.button
                  type="submit"
                  className="place-order"
                  data-testid="button-place-order"
                  whileHover={{ scale: 1.015, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: softEase }}
                >
                  <Send />{formT.place}
                </motion.button>
              </form>
            </motion.section>
          </div>
        </div>
      </main>

      <motion.footer
        className="footer-band"
        id="promise"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: softEase }}
      >
        <div className="footer-perks">
          <motion.div className="perk" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}><Gem />{t.quality}</motion.div>
          <motion.div className="perk" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}><Heart />{t.love}</motion.div>
          <motion.div className="perk" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}><Truck />{t.fast}</motion.div>
        </div>
        <div className="footer-thanks">{t.thanks} <span>♡</span></div>
        <span id="contact" className="footer-contact" data-testid="text-contact">0112211378</span>
      </motion.footer>

      <AnimatePresence>
        {stage !== 'idle' && (
          <motion.div
            className="overlay"
            role="dialog"
            aria-modal="true"
            aria-label={stage === 'flying' ? t.place : t.envelopeHeading}
            data-testid="modal-order-thanks"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {stage === 'flying' ? (
              <motion.div
                className="brand-mark-animation"
                aria-label="Sending your note on its way"
                data-testid="animation-telegram-plane"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.1, opacity: 0 }}
                transition={{ duration: 0.35, ease: softEase }}
              >
                <span className="brand-mark-o" aria-hidden="true">O</span>
                <motion.span
                  style={{ display: 'inline-flex' }}
                  animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Send className="brand-mark-plane" aria-hidden="true" />
                </motion.span>
              </motion.div>
            ) : (
              <>
                <motion.button
                  className="overlay-close"
                  type="button"
                  onClick={() => setStage('idle')}
                  aria-label={t.close}
                  data-testid="button-close-thanks"
                  whileHover={{ scale: 1.08, rotate: 90 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ duration: 0.2 }}
                >
                  <X />
                </motion.button>
                <motion.div
                  className="envelope-scene"
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: softEase }}
                >
                  <div className="envelope" aria-hidden="true">
                    <motion.div
                      className="letter"
                      initial={{ y: 18, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.15, ease: softEase }}
                    >
                      <h2>{t.envelopeHeading}</h2>
                      <p className="arabic" dir="rtl">مرحبا {customerName}. شكرا علي اختيارك لي olara gifts ممتنين جدا لانك اخترتنا ومشكور جدا جدا.</p>
                    </motion.div>
                  </div>
                  <motion.button
                    type="button"
                    className="complete-button"
                    onClick={continueToWhatsApp}
                    data-testid="button-complete-order"
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t.complete}
                  </motion.button>
                </motion.div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;