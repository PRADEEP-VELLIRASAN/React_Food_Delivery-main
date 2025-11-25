import React from "react";
import './styles.css'


const ExtraIngredient = ({ingredient, onSelect, isChecked}) => {
  return (
    <div className="extraIngredient" style={{
      display: 'inline-flex',
      alignItems: 'center',
      minHeight: '2.5rem',
      padding: '0 1.2rem',
      margin: '0 0.7rem 1rem 0',
      borderRadius: '2rem',
      background: '#fff',
      fontSize: '1.1rem',
      color: '#222',
      boxShadow: '0 2px 8px rgba(223,32,32,0.07)',
      border: isChecked ? '2px solid #df2020' : '1px solid #eee',
      fontWeight: isChecked ? 700 : 500,
      cursor: 'pointer',
      transition: 'border 0.2s, box-shadow 0.2s'
    }}>
      <label style={{display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%', marginBottom: 0}}>
        <input type="checkbox" checked={isChecked} onChange={() => onSelect(ingredient)} style={{marginRight: '8px', accentColor: '#df2020', width: '1.1rem', height: '1.1rem'}} />
        {ingredient}
      </label>
    </div>
  );
};

export default ExtraIngredient;
