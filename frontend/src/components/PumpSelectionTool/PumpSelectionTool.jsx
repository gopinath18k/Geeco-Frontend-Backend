// src/PumpSelectionTool.jsx
import React, { useState, useEffect, useCallback } from 'react';
import './PumpSelectionTool.css';
import { pumpSelectionQuestions } from './../data/questions.js';
import { pumps } from './../data/products';
import SelectionTool from './../PumpSelectionTool/SelectionTool.jsx';
import ProductList from './../PumpSelectionTool/ProductList.jsx';

function PumpSelectionTool() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [filteredPumps, setFilteredPumps] = useState([]);
  const [currentQuestionFlow, setCurrentQuestionFlow] = useState([pumpSelectionQuestions[0]]);
  const [allAnswered, setAllAnswered] = useState(false);

  // Filter pumps after all questions answered
  const filterProducts = useCallback(() => {
    let tempPumps = [...pumps];


    // Domestic Question //

    if (answers.applicationType) {
      tempPumps = tempPumps.filter(pump => pump.application === answers.applicationType);
    }
    if (answers.domesticUse_waterSource) {
      tempPumps = tempPumps.filter(pump => pump.waterSource === answers.domesticUse_waterSource);
    }

    // Domestic Question SumpTank surface//

    if (answers.domesticUse_sumpTank_installLocation) {
      tempPumps = tempPumps.filter(pump => pump.installLocation === answers.domesticUse_sumpTank_installLocation);
    }
    if (answers.domesticUse_sumpTank_surface_head) {
      const headValue = parseInt(answers.domesticUse_sumpTank_surface_head);
      tempPumps = tempPumps.filter(pump => headValue >= pump.headMin && headValue <= pump.headMax);
    }
    if (answers.domesticUse_sumpTank_surface_discharge) {
      const dischargeValue = parseInt(answers.domesticUse_sumpTank_surface_discharge);
      tempPumps = tempPumps.filter(pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax);
    }
    if (answers.domesticUse_sumpTank_surface_deliverySize) {
      tempPumps = tempPumps.filter(pump => pump.deliverySize.includes(answers.domesticUse_sumpTank_surface_deliverySize));
    }

    // Domestic Question SumpTank submerged//

    if (answers.domesticUse_sumpTank_submerged_head) {
      const headValue = parseInt(answers.domesticUse_sumpTank_submerged_head);
      tempPumps = tempPumps.filter(pump => headValue >= pump.headMin && headValue <= pump.headMax);
    }
    if (answers.domesticUse_sumpTank_submerged_discharge) {
      const dischargeValue = parseInt(answers.domesticUse_sumpTank_submerged_discharge);
      tempPumps = tempPumps.filter(pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax);
    }
    if (answers.domesticUse_sumpTank_submerged_deliverySize) {
      tempPumps = tempPumps.filter(pump => pump.deliverySize.includes(answers.domesticUse_sumpTank_submerged_deliverySize));
    }

    // Domestic Question Openwell surface//

    // --- Domestic Question Openwell Surface ---
    
    if (answers.domesticUse_openwell_installLocation) {
      tempPumps = tempPumps.filter(
        pump => pump.installLocation === answers.domesticUse_openwell_installLocation
      );
    }

    if (answers.domesticUse_openwell_surface_head) {
      const headValue = parseFloat(answers.domesticUse_openwell_surface_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.headMin && headValue <= pump.headMax
      );
    }

    if (answers.domesticUse_openwell_surface_discharge) {
      const dischargeValue = parseFloat(answers.domesticUse_openwell_surface_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax
      );
    }

    if (answers.domesticUse_openwell_surface_deliverySize) {
      tempPumps = tempPumps.filter(
        pump => pump.deliverySize?.includes(answers.domesticUse_openwell_surface_deliverySize)
      );
    }

    // --- Domestic Question Openwell Submerged ---

    if (answers.domesticUse_openwell_Submerged_head) {
      const headValue = parseFloat(answers.domesticUse_openwell_Submerged_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.headMin && headValue <= pump.headMax
      );
    }

    if (answers.domesticUse_openwell_Submerged_discharge) {
      const dischargeValue = parseFloat(answers.domesticUse_openwell_Submerged_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax
      );
    }

    if (answers.domesticUse_openwell_surface_deliverySize) {
      tempPumps = tempPumps.filter(
        pump => pump.deliverySize?.includes(answers.domesticUse_openwell_surface_deliverySize)
      );
    }


      // Domestic Question Borewell //

    // --- Domestic Question Borewell Surface ---
    
    if (answers.domesticUse_borewell_installLocation) {
      tempPumps = tempPumps.filter(
        pump => pump.installLocation === answers.domesticUse_borewell_installLocation
      );
    }
    if (answers.domesticUse_borewell_surface_phase) {
      tempPumps = tempPumps.filter(
        pump => pump.phase === answers.domesticUse_borewell_surface_phase
      );
    }

    if (answers.domesticUse_borewell_surface_depth) {
      const depthValue = parseFloat(answers.domesticUse_borewell_surface_depth);
      tempPumps = tempPumps.filter(
        pump => depthValue >= pump.depthMin && depthValue <= pump.depthMax
      );
    }
    if (answers.domesticUse_borewell_surface_head) {
      const headValue = parseFloat(answers.domesticUse_borewell_surface_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.headMin && headValue <= pump.headMax
      );
    }

    if (answers.domesticUse_borewell_surface_discharge) {
      const dischargeValue = parseFloat(answers.domesticUse_borewell_surface_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
      );
    }




    setFilteredPumps(tempPumps);
  }, [answers]);

  useEffect(() => {
    if (allAnswered) {
      filterProducts();
    }
  }, [answers, filterProducts, allAnswered]);

  const handleAnswer = (questionId, answer, nextSectionId) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));

    if (nextSectionId) {
      const nextQuestions = pumpSelectionQuestions.filter(q => q.section === nextSectionId);
      setCurrentQuestionFlow(prev => [...prev.slice(0, currentStep + 1), ...nextQuestions]);
      setCurrentStep(prev => prev + 1);
    } else if (currentStep < currentQuestionFlow.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setAllAnswered(true);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const resetSelection = () => {
    setAnswers({});
    setCurrentStep(0);
    setCurrentQuestionFlow([pumpSelectionQuestions[0]]);
    setFilteredPumps([]);
    setAllAnswered(false);
  };

  const currentQ = currentQuestionFlow[currentStep];

  return (
    <div className="Pump_Selction_Tool_Container">
      <h1>Pump Selector Tool</h1>
      <button className='Pump_selection_Reset_Button' onClick={resetSelection}>Reset Selection</button>

      {currentQ && !allAnswered ? (
        <SelectionTool
          question={currentQ}
          onAnswer={handleAnswer}
          currentAnswer={answers[currentQ.id]}
          goToPreviousStep={goToPreviousStep}
          canGoBack={currentStep > 0}
        />
      ) : (
        <div>
          <h2>Selection Complete!</h2>
          {filteredPumps.length === 0 ? (
            <p>No pumps match your criteria. Try adjusting your selections.</p>
          ) : (
            <ProductList pumps={filteredPumps} />
          )}
        </div>
      )}
    </div>
  );
}

export default PumpSelectionTool;
