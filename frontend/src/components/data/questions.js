// src/data/questions.js (Example for Domestic Use)
export const pumpSelectionQuestions = [
  {
    id: 'applicationType',
    question: 'What do you need the pump for?',
    options: [
      { id: 'domestic', label: 'Domestic use (home, garden, water tanks, etc.)', nextSection: 'domesticUse' },
      { id: 'agricultural', label: 'Agricultural use (irrigation, open well, borewell, etc.)', nextSection: 'agriculturalUse' },
      { id: 'commercial', label: 'Commercial/Industrial use (Utility water pumping, car wash, pressure boosting, etc.)', nextSection: 'commercialUse' },
      { id: 'wastewater', label: 'Wastewater and drainage applications.', nextSection: 'wastewaterUse' },
    ],
  },
  {
    id: 'domesticUse_waterSource',
    question: 'What is the Water Source?',
    section: 'domesticUse', // This question belongs to the 'domesticUse' flow
    options: [
      { id: 'sumpTank', label: 'Sump/Tank', nextSection: 'domesticUse_sumpTank' },
      { id: 'openwell', label: 'Openwell (Well)', nextSection: 'domesticUse_openwell' },
      { id: 'borewell', label: 'Borewell', nextSection: 'domesticUse_borewell' },
    ],
  },
  // --- Sump/Tank branch for Domestic Use ---
  {
    id: 'domesticUse_sumpTank_installLocation',
    question: 'Where do you want to install the pump?',
    section: 'domesticUse_sumpTank',
    options: [
      { id: 'surface_sumpTank', label: 'Surface', nextSection: 'domesticUse_sumpTank_surface' },
      { id: 'submerged_sumpTank', label: 'Submerged in water', nextSection: 'domesticUse_sumpTank_submerged' },
    ],
  },
  // --- Surface installation for Sump/Tank ---
  {
    id: 'domesticUse_sumpTank_surface_head',
    question: 'HEAD- how high you will need to pump water? (In MTS) (1m-50m)',
    section: 'domesticUse_sumpTank_surface',
    type: 'input', // Indicate this is an input field
    unit: 'meters',
    min: 1,
    max: 50,
  },
  {
    id: 'domesticUse_sumpTank_surface_discharge',
    question: 'Discharge - how much flow you will need to pump? (1LPM-450LPM)',
    section: 'domesticUse_sumpTank_surface',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },
  {
    id: 'domesticUse_sumpTank_surface_deliverySize',
    question: 'Delivery Size',
    section: 'domesticUse_sumpTank_surface',
    options: [
      { id: '1inch', label: '1"' },
      { id: '1.5inch', label: '1.5"' },
      { id: '2inch', label: '2"' },
      { id: '2.5inch', label: '2.5"' },
    ],
  },
  // --- Submerged installation for Sump/Tank (similar structure) ---
  {
    id: 'domesticUse_sumpTank_submerged_head',
    question: 'HEAD- how high you will need to pump water? (In MTS) (1m-50m)',
    section: 'domesticUse_sumpTank_submerged',
    type: 'input',
    unit: 'meters',
    min: 1,
    max: 50,
  },
  {
    id: 'domesticUse_sumpTank_submerged_discharge',
    question: 'Discharge - how much flow you will need to pump? (1LPM-450LPM)',
    section: 'domesticUse_sumpTank_submerged',
    type: 'input',
    unit: 'LPM',
    min: 1,
    max: 450,
  },
  {
    id: 'domesticUse_sumpTank_submerged_deliverySize',
    question: 'Delivery Size',
    section: 'domesticUse_sumpTank_submerged',
    options: [
      { id: '1inch_sub', label: '1"' },
      { id: '1.5inch_sub', label: '1.5"' },
      { id: '2inch_sub', label: '2"' },
      { id: '2.5inch_sub', label: '2.5"' },
    ],
  },
];