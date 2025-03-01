// /src/pages/AboutAllergies.js
import React, { useState } from 'react';

const allergenData = [
  {
    id: 'milk',
    label: 'Milk',
    emoji: '🥛',
    description: `Milk allergy is an immune reaction to the proteins found in cow's milk. It is one of the most common food allergies in infants and young children. Unlike lactose intolerance, which is a digestive issue, milk allergy can trigger life-threatening reactions. 
    
Detailed Information:
• Affects approximately 2-3% of children.
• Symptoms may include hives, vomiting, abdominal pain, difficulty breathing, and anaphylaxis.
• Diagnosis is made via skin prick tests and specific IgE blood tests.
• It may be outgrown in some children, but many remain allergic into adulthood.`,
    commonFoods: `Common sources of milk proteins include:
• Milk, cheese, yogurt, butter, cream, and ice cream.
• Many baked goods, sauces, and processed foods.
• Hidden dairy ingredients can appear in unexpected products.
    
Detailed Information:
• Always read labels for terms like casein, whey, or lactose.
• Some products use milk derivatives even if they do not list "milk" explicitly.
• Cross-contamination in restaurants and food manufacturing is a risk.`,
    symptoms: `Symptoms of milk allergy include:
• Skin reactions such as hives and eczema.
• Gastrointestinal issues like vomiting and diarrhea.
• Respiratory problems including wheezing.
• In severe cases, anaphylaxis, which is a medical emergency.
    
Detailed Information:
• Symptoms typically occur within minutes of exposure.
• Mild reactions may be treated with antihistamines, but severe reactions require immediate epinephrine administration.`,
    managementTips: `To manage a milk allergy:
• Strictly avoid all dairy products.
• Use plant-based alternatives such as almond, soy, or oat milk.
• Read labels carefully and ask questions when dining out.
• Educate family members, friends, and caregivers about the allergy.
    
Detailed Information:
• Meal planning and cooking at home can help control exposure.
• Regular consultations with an allergist are essential.
• Consider joining support groups for additional guidance and emotional support.`,
    emergencyInfo: `In case of accidental exposure to milk:
• Immediately use your epinephrine auto-injector if prescribed.
• Call emergency services (911) without delay.
• Follow your personalized emergency action plan meticulously.
    
Detailed Information:
• Do not wait for symptoms to worsen.
• Ensure that everyone around you, including teachers and caregivers, knows your emergency plan.
• Carry a medical alert bracelet with your allergy details.`,
    additionalInfo: `Additional Considerations:
• Milk allergy is different from lactose intolerance.
• Some children may outgrow a milk allergy, but continued vigilance is necessary.
• Ongoing research is exploring potential therapies, including oral immunotherapy.
    
Detailed Information:
• Stay informed about new treatment options by consulting your allergist regularly.
• Educational resources and patient support programs can provide further insights.
• Regular re-evaluation is important to monitor any changes in your allergy status.`
  },
  {
    id: 'peanuts',
    label: 'Peanuts',
    emoji: '🥜',
    description: `Peanut allergy is one of the most serious and potentially life-threatening food allergies. Even a trace amount of peanut protein can trigger a severe reaction in sensitive individuals.
    
Detailed Information:
• Affects about 1-2% of the population.
• Often persists for life.
• Symptoms range from mild skin reactions to severe anaphylaxis.
• Early introduction in high-risk infants may reduce the likelihood of developing this allergy.`,
    commonFoods: `Peanuts can be found in:
• Peanut butter, candies, baked goods, and snacks.
• Sauces, dressings, and various processed foods.
• They may also be present in unexpected items labeled as groundnuts.
    
Detailed Information:
• Always scrutinize labels for terms such as "peanut," "groundnut," or "peanut oil."
• Be cautious of cross-contamination in restaurants and manufacturing facilities.
• Educate yourself on hidden sources of peanuts, especially in ethnic cuisines.`,
    symptoms: `Common symptoms include:
• Hives, itching, and swelling of the lips, tongue, or throat.
• Gastrointestinal distress such as vomiting or diarrhea.
• Severe reactions may lead to anaphylaxis, requiring immediate treatment.
    
Detailed Information:
• Reactions typically occur within minutes of exposure.
• Even a small amount can provoke a severe response.
• Immediate administration of epinephrine is crucial in severe cases.`,
    managementTips: `Managing peanut allergy involves:
• Strict avoidance of all peanut products.
• Reading food labels meticulously and inquiring at restaurants.
• Informing friends, family, and school staff about the allergy.
    
Detailed Information:
• Consider carrying a medical alert card and an epinephrine auto-injector at all times.
• Participate in educational programs and support groups for continuous learning.
• Develop a detailed emergency plan and review it regularly.`,
    emergencyInfo: `In an emergency involving peanut exposure:
• Use your epinephrine auto-injector immediately.
• Call 911 and follow your emergency action plan.
• Inform those around you about your condition to ensure prompt assistance.
    
Detailed Information:
• Do not delay treatment, as reactions can escalate rapidly.
• Ensure your caregivers and colleagues are trained to recognize and handle anaphylaxis.
• Keep your emergency medication accessible at all times.`,
    additionalInfo: `Additional Information:
• Peanut allergy is often lifelong, requiring constant vigilance.
• Advances in immunotherapy are being explored, but strict avoidance remains essential.
• Ongoing education is vital for maintaining safety.
    
Detailed Information:
• Regularly update your knowledge and emergency plan.
• Engage with support networks and patient advocacy groups.
• Consult with healthcare professionals for personalized advice and follow-up.`
  },
  {
    id: 'eggs',
    label: 'Eggs',
    emoji: '🥚',
    description: `Egg allergy is common among children and is caused by an immune response to proteins in eggs. It can cause a wide range of reactions from mild skin rashes to severe anaphylaxis.
    
Detailed Information:
• Affects approximately 1-2% of children.
• Often presents in early childhood and may be outgrown in some cases.
• Diagnosis is performed through skin tests and specific IgE measurements.
• It is important to distinguish egg allergy from egg intolerance.`,
    commonFoods: `Eggs are present in many foods, including:
• Baked goods, mayonnaise, custards, pasta, and sauces.
• Processed foods and even some non-obvious products may contain egg proteins.
• Hidden egg ingredients may be listed as albumin or egg white.
    
Detailed Information:
• Always read ingredient labels carefully.
• Ask about ingredients when eating out.
• Be aware that egg proteins may be present even in foods that do not appear egg-based.`,
    symptoms: `Symptoms of egg allergy include:
• Hives, rashes, and swelling.
• Gastrointestinal issues such as vomiting and diarrhea.
• Respiratory symptoms and, in severe cases, anaphylaxis.
    
Detailed Information:
• Reactions can occur within minutes after ingestion.
• The severity of symptoms varies between individuals.
• Prompt treatment is necessary for severe reactions.`,
    managementTips: `To manage an egg allergy:
• Avoid all egg-containing products and use substitutes in recipes.
• Educate yourself on alternative ingredients and safe cooking practices.
• Inform caregivers and restaurant staff about your allergy.
    
Detailed Information:
• Always double-check labels, as egg proteins may be hidden under different names.
• Consider consulting a nutritionist to maintain a balanced diet.
• Regularly review your allergy management plan with your healthcare provider.`,
    emergencyInfo: `If you accidentally consume eggs:
• Use your epinephrine auto-injector immediately if prescribed.
• Seek emergency medical help right away.
• Follow your personal emergency action plan.
    
Detailed Information:
• Do not delay in administering treatment.
• Ensure that caregivers are aware of your condition and know what to do.
• A written emergency plan can help ensure prompt, effective action.`,
    additionalInfo: `Additional Considerations:
• Many children outgrow egg allergy, but some may continue to have it into adulthood.
• Ongoing monitoring and periodic re-evaluation by an allergist are recommended.
• Stay informed about new treatments and management strategies.
    
Detailed Information:
• Participate in educational sessions and support groups.
• Keep an updated record of your allergy history.
• Regular follow-up appointments with your healthcare provider are essential.`
  },
  {
    id: 'wheat',
    label: 'Wheat',
    emoji: '🌾',
    description: `Wheat allergy is an immune reaction to proteins found in wheat. It is distinct from celiac disease and gluten sensitivity, which involve different immune responses.
    
Detailed Information:
• Common in children, though some may outgrow it.
• Symptoms can range from mild to severe, including skin and respiratory reactions.
• Diagnosis is confirmed through skin and blood tests.
• Proper identification is crucial as wheat is a staple in many diets.`,
    commonFoods: `Foods that commonly contain wheat include:
• Bread, pasta, cereals, baked goods, and crackers.
• Many processed foods, sauces, and even some soups.
• Wheat can be hidden under names like gluten, semolina, or durum.
    
Detailed Information:
• Always check ingredient labels for multiple references to wheat.
• Some products marketed as "gluten-free" may still contain traces of wheat.
• Awareness of alternative grains can help maintain a balanced diet.`,
    symptoms: `Wheat allergy symptoms include:
• Skin rashes, hives, and itching.
• Abdominal pain, vomiting, and diarrhea.
• Respiratory issues and, in severe cases, anaphylaxis.
    
Detailed Information:
• Symptoms may occur immediately or be delayed.
• Even small amounts can trigger a reaction in sensitive individuals.
• Immediate treatment is critical for severe reactions.`,
    managementTips: `Managing wheat allergy involves:
• Avoiding all wheat and wheat-derived ingredients.
• Opting for gluten-free or wheat-free alternatives.
• Educating yourself on safe food practices and reading labels carefully.
    
Detailed Information:
• Consider working with a dietitian to ensure nutritional needs are met.
• Cross-contamination is a significant risk in shared kitchens.
• Regular review of your allergy management plan is important.`,
    emergencyInfo: `In case of accidental exposure to wheat:
• Use your epinephrine auto-injector immediately if symptoms arise.
• Seek emergency medical help without delay.
• Follow your personalized emergency action plan.
    
Detailed Information:
• Timely intervention can prevent the reaction from worsening.
• Ensure that everyone around you is aware of your wheat allergy.
• A proactive approach to emergencies is essential.`,
    additionalInfo: `Additional Information:
• Wheat allergy is not the same as celiac disease.
• Many children with wheat allergy outgrow it, but lifelong vigilance may be necessary.
• Stay informed about safe alternatives and dietary modifications.
    
Detailed Information:
• Regular consultations with a healthcare professional can help manage this allergy.
• Educational resources and support groups can offer additional guidance.
• Maintain open communication with caregivers regarding your dietary needs.`
  },
  {
    id: 'fish',
    label: 'Fish',
    emoji: '🐟',
    description: `Fish allergy is a serious condition caused by an immune reaction to proteins in fish. It is generally lifelong and requires strict avoidance.
    
Detailed Information:
• Fish allergy affects both children and adults.
• Symptoms can include hives, respiratory distress, and anaphylaxis.
• Diagnosis is made via skin tests and specific IgE blood tests.
• Unlike some other allergies, fish allergy is less likely to be outgrown.`,
    commonFoods: `Common fish include:
• Salmon, tuna, cod, halibut, and trout.
• Fish is also used in processed foods, soups, and sauces.
• Cross-contamination in kitchens can pose a risk.
    
Detailed Information:
• Always ask about ingredients when dining out.
• Be aware that fish can be present in trace amounts in some processed foods.
• Familiarize yourself with the names of various fish proteins on labels.`,
    symptoms: `Fish allergy symptoms range from:
• Mild skin reactions to severe respiratory distress.
• Gastrointestinal problems and anaphylaxis.
• Rapid onset of symptoms after exposure.
    
Detailed Information:
• Symptoms require immediate attention, especially if anaphylaxis occurs.
• Early recognition and treatment are crucial for preventing severe reactions.
• Monitoring your condition with your healthcare provider is essential.`,
    managementTips: `To manage a fish allergy:
• Avoid all fish and fish-derived products.
• Check food labels diligently and ask questions in restaurants.
• Educate yourself about cross-contamination risks.
    
Detailed Information:
• Regular consultation with an allergist can help update your management plan.
• Consider carrying a medical alert card that specifies your fish allergy.
• Awareness and education are key components of managing this condition.`,
    emergencyInfo: `In the event of a fish allergy reaction:
• Immediately use your epinephrine auto-injector and call 911.
• Follow your emergency action plan without delay.
• Ensure that friends, family, and caregivers are aware of the signs of a reaction.
    
Detailed Information:
• Time is critical in severe allergic reactions.
• Do not wait for symptoms to worsen before seeking help.
• Consistent training on emergency procedures can save lives.`,
    additionalInfo: `Additional Considerations:
• Fish allergy is often persistent and requires lifelong caution.
• New research into desensitization therapies is ongoing.
• Always stay informed about safe alternatives and dietary adjustments.
    
Detailed Information:
• Joining a support group can provide emotional support and practical advice.
• Keeping up with the latest guidelines from allergy organizations is recommended.
• Regular follow-ups with your allergist are essential for monitoring your condition.`
  },
  {
    id: 'shellfish',
    label: 'Shellfish',
    emoji: '🦐',
    description: `Shellfish allergy is one of the most common food allergies among adults and is known for its potential to cause severe reactions. It involves an immune response to proteins in shrimp, crab, lobster, and other shellfish.
    
Detailed Information:
• Affects a significant percentage of adults.
• Often results in severe, rapid-onset symptoms.
• Diagnosis requires careful testing as cross-reactivity with other seafood can occur.
• Strict avoidance is necessary as reactions can be life-threatening.`,
    commonFoods: `Common shellfish include:
• Shrimp, crab, lobster, scallops, and clams.
• Shellfish are often ingredients in seafood dishes, soups, and sauces.
• They may also be present in processed foods as flavorings or additives.
    
Detailed Information:
• Always check menus and ingredient lists when dining out.
• Cross-contamination in kitchens is a major risk.
• Educate yourself on the various names used for shellfish in ingredient lists.`,
    symptoms: `Symptoms of shellfish allergy include:
• Hives, swelling, and skin irritation.
• Respiratory distress and, in severe cases, anaphylaxis.
• Rapid onset of symptoms after exposure.
    
Detailed Information:
• Due to the severity of reactions, immediate treatment is critical.
• Symptoms can escalate quickly, making prompt response essential.
• It is important to monitor any changes in reaction patterns over time.`,
    managementTips: `Managing shellfish allergy involves:
• Complete avoidance of all shellfish and shellfish-derived products.
• Thorough label reading and asking about ingredients when eating out.
• Educating family, friends, and restaurant staff about your allergy.
    
Detailed Information:
• Always carry your epinephrine auto-injector and ensure that your emergency action plan is up to date.
• Regularly review safe food practices and avoid cross-contamination.
• Consider allergy training sessions for caregivers.`,
    emergencyInfo: `In case of exposure to shellfish:
• Use your epinephrine auto-injector immediately and call 911.
• Follow your written emergency action plan without hesitation.
• Inform everyone around you about your shellfish allergy.
    
Detailed Information:
• Rapid administration of medication can prevent the progression of anaphylaxis.
• Ensure that emergency contact information is always accessible.
• Consider carrying additional antihistamines as directed by your doctor.`,
    additionalInfo: `Additional Information:
• Shellfish allergy is generally lifelong and requires constant vigilance.
• Ongoing research may offer new management strategies in the future.
• Support from healthcare providers and fellow patients can be very helpful.
    
Detailed Information:
• Stay informed about the latest developments in shellfish allergy management.
• Regular follow-up appointments with your allergist are crucial.
• Joining patient support groups may provide additional insights and coping strategies.`
  },
  {
    id: 'soy',
    label: 'Soy',
    emoji: '🌱',
    description: `Soy allergy is caused by an immune response to proteins found in soy products. It affects both children and adults and can range from mild to severe reactions.
    
Detailed Information:
• Soy is one of the more common food allergens.
• Reactions vary widely and can sometimes be severe.
• Diagnosis is confirmed via skin tests and specific IgE blood tests.
• Many individuals may outgrow soy allergy, but caution is always advised.`,
    commonFoods: `Soy is found in:
• Tofu, soy milk, soy sauce, edamame, and many processed foods.
• It is also commonly used in vegetarian products as a protein substitute.
• Hidden soy ingredients can be present in unexpected items.
    
Detailed Information:
• Always read food labels carefully for terms such as soy protein or soybean oil.
• Cross-contamination is a risk in kitchens and restaurants.
• Familiarize yourself with alternative names for soy ingredients.`,
    symptoms: `Symptoms include:
• Skin rashes, hives, and itching.
• Digestive problems like stomach pain, vomiting, and diarrhea.
• In severe cases, respiratory distress and anaphylaxis.
    
Detailed Information:
• Symptoms typically appear within minutes of exposure.
• The severity of reactions varies; prompt treatment is essential.
• Early recognition of symptoms can be life-saving.`,
    managementTips: `To manage a soy allergy:
• Avoid all soy-containing products and read labels diligently.
• Opt for soy-free alternatives when possible.
• Inform caregivers and restaurant staff about your allergy.
    
Detailed Information:
• Educate yourself on the different forms in which soy may appear in food.
• Regular consultation with a nutritionist may help maintain a balanced diet.
• Awareness and proactive management are key to preventing accidental exposure.`,
    emergencyInfo: `If exposed to soy:
• Use your epinephrine auto-injector immediately and seek medical attention.
• Follow your emergency action plan strictly.
• Ensure that everyone around you understands the severity of your allergy.
    
Detailed Information:
• Do not delay treatment even if symptoms seem mild initially.
• Keep your emergency medications readily accessible at all times.
• Regularly review your emergency plan with your healthcare provider.`,
    additionalInfo: `Additional Information:
• Soy allergy may be outgrown by some children, but many adults remain allergic.
• Ongoing research is exploring potential treatments and desensitization methods.
• Stay informed and connected with support networks for the best management strategies.
    
Detailed Information:
• Continuous education and awareness are crucial for long-term management.
• Keep track of new findings and adjust your management plan as needed.
• Sharing experiences in support groups can provide valuable insights.`
  },
  {
    id: 'tree_nuts',
    label: 'Tree Nuts',
    emoji: '🌰',
    description: `Tree nut allergy is a serious condition triggered by an immune reaction to proteins in nuts such as almonds, walnuts, cashews, pistachios, and more. It is often lifelong and can lead to severe allergic reactions.
    
Detailed Information:
• Tree nut allergy is among the most severe food allergies.
• Even small amounts can trigger a reaction.
• Diagnosis is typically performed using skin and blood tests.
• Lifelong avoidance is usually necessary, though some children may outgrow it.`,
    commonFoods: `Tree nuts appear in:
• Nut butters, baked goods, confectioneries, and snacks.
• They are often used as ingredients in cooking and food manufacturing.
• Hidden forms may appear in oils, flavorings, and as garnish.
    
Detailed Information:
• Always check ingredient labels for multiple names of tree nuts.
• Be aware of cross-contamination in food processing and dining establishments.
• Educate yourself on safe alternatives to tree nuts for recipes.`,
    symptoms: `Symptoms include:
• Itching, hives, and swelling.
• Gastrointestinal distress such as nausea and vomiting.
• In severe cases, anaphylaxis requiring immediate medical intervention.
    
Detailed Information:
• Reactions can occur very rapidly.
• Even trace amounts can cause a reaction.
• Early and accurate symptom recognition is crucial for safety.`,
    managementTips: `To manage a tree nut allergy:
• Strictly avoid all tree nut products.
• Learn to recognize various names for tree nuts on labels.
• Substitute with safe alternatives such as seeds or other nut-free products.
    
Detailed Information:
• Regular consultation with an allergist is important.
• Educate family members and caregivers about the potential dangers.
• Use a food diary to track any accidental exposures and reactions.`,
    emergencyInfo: `If you have a tree nut reaction:
• Immediately use your epinephrine auto-injector.
• Call 911 and follow your emergency action plan precisely.
• Inform those around you so they can assist in an emergency.
    
Detailed Information:
• Do not wait for symptoms to escalate.
• Ensure that emergency procedures are well-practiced by you and your caregivers.
• Having an action plan can be life-saving in severe reactions.`,
    additionalInfo: `Additional Information:
• Tree nut allergy is typically a lifelong condition.
• Ongoing research may lead to future treatment options.
• Regular updates from healthcare professionals are recommended.
    
Detailed Information:
• Participate in support groups for emotional and practical support.
• Keep informed about new developments in allergy management.
• A proactive approach to diet and medication is essential.`
  },
  {
    id: 'sesame',
    label: 'Sesame',
    emoji: '🌿',
    description: `Sesame allergy is an increasingly recognized food allergy that can cause severe reactions. It involves an immune response to proteins in sesame seeds, which are used in many culinary traditions.
    
Detailed Information:
• Sesame allergy is now listed as a major allergen in several countries.
• It can affect both children and adults.
• Symptoms may vary from mild to life-threatening.
• Diagnosis is typically done through skin testing or blood tests.`,
    commonFoods: `Sesame is found in:
• Tahini, hummus, sesame oil, and various Middle Eastern and Asian dishes.
• It is also present in baked goods, crackers, and processed foods.
• Hidden sesame ingredients may be listed under alternative names.
    
Detailed Information:
• Always check food labels for sesame ingredients.
• Be cautious in restaurants and fast-food establishments.
• Educate yourself on the various terms used to denote sesame.`,
    symptoms: `Symptoms of sesame allergy include:
• Skin reactions like hives and eczema.
• Gastrointestinal issues such as stomach pain and vomiting.
• Severe cases may lead to anaphylaxis.
    
Detailed Information:
• Reactions can occur quickly and require immediate action.
• Even minimal exposure can cause significant symptoms.
• Consistent monitoring and preparedness are essential.`,
    managementTips: `To manage sesame allergy:
• Avoid all products containing sesame and its derivatives.
• Ask questions when eating out to ensure dishes do not contain hidden sesame.
• Consider using sesame-free alternatives.
    
Detailed Information:
• Keep an updated list of safe foods.
• Educate family and friends about the risks of cross-contamination.
• Regularly consult with an allergist to update your management plan.`,
    emergencyInfo: `In an emergency involving sesame:
• Use your epinephrine auto-injector immediately.
• Call emergency services (911) without delay.
• Follow your emergency action plan meticulously.
    
Detailed Information:
• Immediate treatment can prevent a severe reaction.
• Ensure that all caregivers are aware of your sesame allergy.
• Carry a medical alert identification at all times.`,
    additionalInfo: `Additional Information:
• Sesame allergy is emerging as a significant food allergy worldwide.
• Continuous education and vigilance are critical.
• Research is ongoing for improved treatments.
    
Detailed Information:
• Stay informed through reputable allergy organizations.
• Participate in community support groups.
• Regular follow-ups with your allergist are highly recommended.`
  }
];

function AboutAllergies() {
  const [selectedAllergen, setSelectedAllergen] = useState(null);
  const [activeTab, setActiveTab] = useState('description'); // Tabs: description, commonFoods, symptoms, tips, emergency, additional
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (allergen) => {
    setSelectedAllergen(allergen);
    setActiveTab('description');
    setModalOpen(true);
  };

  return (
    <div className="about-allergies-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h2 className="page-title" style={{ textAlign: 'center', marginBottom: '20px', color: '#4a4a4a' }}>Allergen Information</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.2em' }}>
        Tap an allergen below to learn everything you need to know about it—including detailed descriptions, common foods that contain it, symptoms, management strategies, emergency procedures, and additional safety tips.
      </p>
      <div className="allergen-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px' }}>
        {allergenData.map((allergen) => (
          <div
            key={allergen.id}
            className="allergen-card"
            style={{
              backgroundColor: '#4fc1e9',
              borderRadius: '10px',
              padding: '20px',
              color: '#fff',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
            onClick={() => handleCardClick(allergen)}
          >
            <div className="allergen-emoji" style={{ fontSize: '3em', marginBottom: '10px' }}>
              {allergen.emoji}
            </div>
            <div className="allergen-label" style={{ fontSize: '1.3em', fontWeight: '600' }}>
              {allergen.label}
            </div>
          </div>
        ))}
      </div>

      {modalOpen && selectedAllergen && (
        <div className="modal-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div className="modal-content" style={{
            background: '#fff',
            padding: '30px',
            borderRadius: '10px',
            maxWidth: '900px',
            width: '95%',
            position: 'relative',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}>
            <button className="modal-close" onClick={() => setModalOpen(false)} style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              border: 'none',
              background: 'none',
              fontSize: '1.5em',
              cursor: 'pointer'
            }}>✖</button>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#4a4a4a' }}>
              {selectedAllergen.label} {selectedAllergen.emoji}
            </h2>
            <div className="tab-navigation" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
              <button
                className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
                style={{ padding: '10px 20px', border: 'none', borderBottom: activeTab === 'description' ? '2px solid #4fc1e9' : 'none', background: 'none', cursor: 'pointer' }}
              >
                Description
              </button>
              <button
                className={`tab-button ${activeTab === 'commonFoods' ? 'active' : ''}`}
                onClick={() => setActiveTab('commonFoods')}
                style={{ padding: '10px 20px', border: 'none', borderBottom: activeTab === 'commonFoods' ? '2px solid #4fc1e9' : 'none', background: 'none', cursor: 'pointer' }}
              >
                Common Foods
              </button>
              <button
                className={`tab-button ${activeTab === 'symptoms' ? 'active' : ''}`}
                onClick={() => setActiveTab('symptoms')}
                style={{ padding: '10px 20px', border: 'none', borderBottom: activeTab === 'symptoms' ? '2px solid #4fc1e9' : 'none', background: 'none', cursor: 'pointer' }}
              >
                Symptoms
              </button>
              <button
                className={`tab-button ${activeTab === 'tips' ? 'active' : ''}`}
                onClick={() => setActiveTab('tips')}
                style={{ padding: '10px 20px', border: 'none', borderBottom: activeTab === 'tips' ? '2px solid #4fc1e9' : 'none', background: 'none', cursor: 'pointer' }}
              >
                Management Tips
              </button>
              <button
                className={`tab-button ${activeTab === 'emergency' ? 'active' : ''}`}
                onClick={() => setActiveTab('emergency')}
                style={{ padding: '10px 20px', border: 'none', borderBottom: activeTab === 'emergency' ? '2px solid #4fc1e9' : 'none', background: 'none', cursor: 'pointer' }}
              >
                Emergency Info
              </button>
              <button
                className={`tab-button ${activeTab === 'additional' ? 'active' : ''}`}
                onClick={() => setActiveTab('additional')}
                style={{ padding: '10px 20px', border: 'none', borderBottom: activeTab === 'additional' ? '2px solid #4fc1e9' : 'none', background: 'none', cursor: 'pointer' }}
              >
                Additional Info
              </button>
            </div>
            <div className="tab-content" style={{ textAlign: 'left', fontSize: '1.1em', color: '#333', maxHeight: '500px', overflowY: 'auto' }}>
              {activeTab === 'description' && (
                <div>
                  <p>{selectedAllergen.description}</p>
                  <p>Milk allergy is one of the leading causes of food-induced anaphylaxis in children. It is important to distinguish it from lactose intolerance, as the treatment and management strategies differ significantly.</p>
                  <p>Education on milk allergy is critical, especially for parents and caregivers who need to monitor dietary intake and avoid hidden dairy ingredients.</p>
                </div>
              )}
              {activeTab === 'commonFoods' && (
                <div>
                  <p><strong>Common Foods:</strong></p>
                  <ul>
                    {selectedAllergen.commonFoods.split('\n').map((line, index) => (
                      <li key={index}>{line.trim()}</li>
                    ))}
                  </ul>
                  <p>Always read food labels and ask about ingredients when dining out to ensure products do not contain milk derivatives.</p>
                </div>
              )}
              {activeTab === 'symptoms' && (
                <div>
                  <p><strong>Symptoms:</strong></p>
                  <ul>
                    {selectedAllergen.symptoms.split('\n').map((line, index) => (
                      <li key={index}>{line.trim()}</li>
                    ))}
                  </ul>
                  <p>Recognizing symptoms early can help prevent a full-blown reaction and ensure prompt treatment.</p>
                </div>
              )}
              {activeTab === 'tips' && (
                <div>
                  <p><strong>Management Tips:</strong></p>
                  <ul>
                    {selectedAllergen.managementTips.split('\n').map((line, index) => (
                      <li key={index}>{line.trim()}</li>
                    ))}
                  </ul>
                  <p>Implementing these strategies in daily life can significantly reduce the risk of accidental exposure.</p>
                </div>
              )}
              {activeTab === 'emergency' && (
                <div>
                  <p><strong>Emergency Information:</strong></p>
                  <ul>
                    {selectedAllergen.emergencyInfo.split('\n').map((line, index) => (
                      <li key={index}>{line.trim()}</li>
                    ))}
                  </ul>
                  <p>Always have your epinephrine auto-injector on hand and make sure that those around you know your emergency plan.</p>
                </div>
              )}
              {activeTab === 'additional' && (
                <div>
                  <p><strong>Additional Information:</strong></p>
                  <ul>
                    {selectedAllergen.additionalInfo.split('\n').map((line, index) => (
                      <li key={index}>{line.trim()}</li>
                    ))}
                  </ul>
                  <p>Keep informed about the latest research and treatment options for your allergy.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutAllergies;
