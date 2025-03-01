// /src/pages/Resources.js
import React, { useState, useContext } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';
import restaurantMessages from '../restaurantMessages';

function Resources() {
  const { allergen } = useContext(UserSettingsContext);
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [showRestaurantMsg, setShowRestaurantMsg] = useState(false);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="resources-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h2 className="resources-title" style={{ textAlign: 'center', marginBottom: '30px', color: '#4a4a4a', fontSize: '2.5em' }}>
        Comprehensive Resources for Food Allergy Management
      </h2>
      <p className="resources-intro" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.2em', color: '#333' }}>
        Explore detailed guides on managing food allergies. Whether you’re a parent, caregiver, teacher, or someone managing a food allergy yourself, you’ll find essential information, practical tips, and expert resources here.
      </p>

      {/* Section: General Food Allergy Management */}
      <div className="resources-section">
        <h3
          className="section-title"
          style={{ cursor: 'pointer', color: '#4fc1e9', fontSize: '1.8em', marginBottom: '10px' }}
          onClick={() => toggleSection('general')}
        >
          General Food Allergy Management {expandedSection === 'general' ? '▲' : '▼'}
        </h3>
        {expandedSection === 'general' && (
          <div className="section-content" style={{ padding: '20px', fontSize: '1.1em', color: '#333', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '20px' }}>
            <p>
              Food allergies require constant vigilance and ongoing education. Effective management means understanding your allergens, reading labels carefully, and always being prepared for an emergency.
            </p>
            <p>
              <strong>Key Management Strategies:</strong>
            </p>
            <ul>
              <li>Always read ingredient labels and ask questions when dining out.</li>
              <li>Keep an updated list of safe foods and share it with caregivers.</li>
              <li>Develop and practice an emergency action plan, including the use of epinephrine auto-injectors.</li>
              <li>Regularly consult with your allergist to re-evaluate your condition.</li>
              <li>Participate in support groups and stay informed about the latest research.</li>
            </ul>
            <p>
              Consistency in these habits is key to preventing accidental exposure and ensuring your safety.
            </p>
          </div>
        )}
      </div>

      {/* Section: Reading Food Labels */}
      <div className="resources-section">
        <h3
          className="section-title"
          style={{ cursor: 'pointer', color: '#4fc1e9', fontSize: '1.8em', marginBottom: '10px' }}
          onClick={() => toggleSection('labelReading')}
        >
          Reading Food Labels {expandedSection === 'labelReading' ? '▲' : '▼'}
        </h3>
        {expandedSection === 'labelReading' && (
          <div className="section-content" style={{ padding: '20px', fontSize: '1.1em', color: '#333', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '20px' }}>
            <p>
              Food labels provide crucial information about ingredients and potential allergens. Mastering label reading can help you avoid accidental exposure.
            </p>
            <p>
              <strong>Tips for Reading Labels:</strong>
            </p>
            <ul>
              <li>Examine the ingredients list for allergenic terms like milk, peanuts, eggs, wheat, soy, tree nuts, sesame, and shellfish.</li>
              <li>Watch out for alternative names such as casein, whey, albumin, and gluten.</li>
              <li>Be cautious of products with ambiguous labeling, especially imported goods.</li>
              <li>Use smartphone apps that help identify allergens on food labels.</li>
            </ul>
            <p>
              Regularly reviewing labels is a habit that can significantly reduce your risk of exposure.
            </p>
          </div>
        )}
      </div>

      {/* Section: Emergency Action Plans */}
      <div className="resources-section">
        <h3
          className="section-title"
          style={{ cursor: 'pointer', color: '#4fc1e9', fontSize: '1.8em', marginBottom: '10px' }}
          onClick={() => toggleSection('emergency')}
        >
          Emergency Action Plans {expandedSection === 'emergency' ? '▲' : '▼'}
        </h3>
        {expandedSection === 'emergency' && (
          <div className="section-content" style={{ padding: '20px', fontSize: '1.1em', color: '#333', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '20px' }}>
            <p>
              In the event of an allergic reaction, having a well-practiced emergency action plan is vital. Your plan should detail the immediate steps to take if you’re exposed to an allergen.
            </p>
            <p>
              <strong>Your Emergency Action Plan Should Include:</strong>
            </p>
            <ul>
              <li>Immediate use of an epinephrine auto-injector at the first sign of a reaction.</li>
              <li>Clear instructions to call 911 (or your local emergency number) immediately.</li>
              <li>Guidance on administering additional medications such as antihistamines if necessary.</li>
              <li>Emergency contact details for your healthcare provider and a trusted caregiver.</li>
              <li>Steps for monitoring your symptoms and when to seek hospital care.</li>
            </ul>
            <p>
              Practice this plan regularly with everyone involved in your care to ensure a swift, coordinated response in an emergency.
            </p>
          </div>
        )}
      </div>

      {/* Section: Tips for Parents and Caregivers */}
      <div className="resources-section">
        <h3
          className="section-title"
          style={{ cursor: 'pointer', color: '#4fc1e9', fontSize: '1.8em', marginBottom: '10px' }}
          onClick={() => toggleSection('parentTips')}
        >
          Tips for Parents and Caregivers {expandedSection === 'parentTips' ? '▲' : '▼'}
        </h3>
        {expandedSection === 'parentTips' && (
          <div className="section-content" style={{ padding: '20px', fontSize: '1.1em', color: '#333', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '20px' }}>
            <p>
              Managing a child's food allergy can be challenging. Here are some essential tips to help you create a safe and supportive environment:
            </p>
            <ul>
              <li>Educate yourself about your child’s specific allergy and stay up-to-date on new research and treatment options.</li>
              <li>Create a safe home environment with allergen-free zones and separate utensils.</li>
              <li>Communicate clearly with your child's school, caregivers, and friends about their allergy and emergency procedures.</li>
              <li>Develop a detailed emergency action plan and ensure that everyone involved understands it.</li>
              <li>Keep a list of safe foods and emergency contacts handy at all times.</li>
              <li>Consider joining support groups for shared experiences and additional resources.</li>
              <li>Encourage your child to learn about their allergy and advocate for their own safety as they grow older.</li>
            </ul>
            <p>
              With careful planning, open communication, and regular professional guidance, you can ensure that your child remains safe while enjoying a normal, active life.
            </p>
          </div>
        )}
      </div>

      {/* Section: Teacher and School Guidelines */}
      <div className="resources-section">
        <h3
          className="section-title"
          style={{ cursor: 'pointer', color: '#4fc1e9', fontSize: '1.8em', marginBottom: '10px' }}
          onClick={() => toggleSection('teacherGuidelines')}
        >
          Teacher and School Guidelines {expandedSection === 'teacherGuidelines' ? '▲' : '▼'}
        </h3>
        {expandedSection === 'teacherGuidelines' && (
          <div className="section-content" style={{ padding: '20px', fontSize: '1.1em', color: '#333', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '20px' }}>
            <p>
              For educators, maintaining a safe environment for children with food allergies is essential. Follow these guidelines:
            </p>
            <ul>
              <li>Ensure that all staff are aware of students’ food allergies and know how to respond in an emergency.</li>
              <li>Develop a clear, written protocol for managing allergic reactions, including the use of epinephrine auto-injectors.</li>
              <li>Communicate regularly with parents to develop individualized emergency plans.</li>
              <li>Create allergen-free zones in the classroom and during school activities.</li>
              <li>Educate all students about the importance of food allergy safety to foster a supportive community.</li>
              <li>Keep an up-to-date record of emergency contacts and first aid supplies.</li>
            </ul>
            <p>
              These practices can help ensure that children with food allergies are safe and supported at school.
            </p>
          </div>
        )}
      </div>

      {/* Section: Additional External Resources */}
      <div className="resources-section">
        <h3
          className="section-title"
          style={{ cursor: 'pointer', color: '#4fc1e9', fontSize: '1.8em', marginBottom: '10px' }}
          onClick={() => toggleSection('additionalResources')}
        >
          Additional Resources {expandedSection === 'additionalResources' ? '▲' : '▼'}
        </h3>
        {expandedSection === 'additionalResources' && (
          <div className="section-content" style={{ padding: '20px', fontSize: '1.1em', color: '#333', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '20px' }}>
            <p>
              For further information and support, visit these reputable sources:
            </p>
            <ul>
              <li>
                <a href="https://www.cdc.gov/foodallergies/index.html" target="_blank" rel="noreferrer" style={{ color: '#4fc1e9', textDecoration: 'none' }}>
                  CDC Food Allergies
                </a> – Official guidelines and research.
              </li>
              <li>
                <a href="https://www.foodallergy.org" target="_blank" rel="noreferrer" style={{ color: '#4fc1e9', textDecoration: 'none' }}>
                  Food Allergy Research & Education (FARE)
                </a> – Advocacy, support, and educational resources.
              </li>
              <li>
                <a href="https://www.aaaai.org" target="_blank" rel="noreferrer" style={{ color: '#4fc1e9', textDecoration: 'none' }}>
                  American Academy of Allergy, Asthma, and Immunology (AAAAI)
                </a> – Medical research and clinical guidelines.
              </li>
              <li>
                <a href="https://www.mayoclinic.org/diseases-conditions/food-allergy" target="_blank" rel="noreferrer" style={{ color: '#4fc1e9', textDecoration: 'none' }}>
                  Mayo Clinic – Food Allergy
                </a> – Patient-friendly information and treatment options.
              </li>
              <li>
                <a href="https://www.nfema.org" target="_blank" rel="noreferrer" style={{ color: '#4fc1e9', textDecoration: 'none' }}>
                  National Food Allergy & Anaphylaxis Network (NFAAN)
                </a> – Support and advocacy for families.
              </li>
            </ul>
            <p>
              These external resources provide a wealth of knowledge and can help you stay updated on best practices and new developments in food allergy management.
            </p>
          </div>
        )}
      </div>

      {/* Section: Restaurant Communication */}
      <div className="resources-section">
        <h3
          className="section-title"
          style={{ cursor: 'pointer', color: '#4fc1e9', fontSize: '1.8em', marginBottom: '10px' }}
          onClick={() => toggleSection('restaurant')}
        >
          Restaurant Communication {expandedSection === 'restaurant' ? '▲' : '▼'}
        </h3>
        {expandedSection === 'restaurant' && (
          <div className="section-content" style={{ padding: '20px', fontSize: '1.1em', color: '#333', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '20px' }}>
            <p>
              For peace of mind when dining out, you can use the preformatted message below to communicate your food allergy to restaurant staff. Select your preferred language from the options below, then press "Show This to the Restaurant" to display a tailored message.
            </p>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
              <label style={{ marginRight: '10px', fontSize: '1.1em' }}>Language:</label>
              <select
                value={selectedLanguage}
                onChange={(e) => {
                  setSelectedLanguage(e.target.value);
                  setShowRestaurantMsg(false);
                }}
                style={{ padding: '8px', fontSize: '1em' }}
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
            <button
              className="start-game-button"
              onClick={() => setShowRestaurantMsg(true)}
              style={{ marginBottom: '20px' }}
            >
              Show This to the Restaurant
            </button>
            {showRestaurantMsg && (
              <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', fontSize: '1.1em', color: '#333' }}>
                <p>
                  {restaurantMessages[selectedLanguage] && allergen 
                    ? restaurantMessages[selectedLanguage][allergen] 
                    : "No allergen information available."}
                </p>
                <p>
                  Please show this message to your server or manager to ensure that your food is prepared safely.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Resources;
