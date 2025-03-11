import { useState } from 'react';
import './Bill.css';

export default function Bill({ bill }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`bill-container ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
            <div className="bill-header">
                <h2 className="bill-name">{bill?.name}</h2>
                <span className="expand-icon">{isExpanded ? '−' : '+'}</span>
            </div>
            
            <div className="bill-summary">
                {bill?.summary}
            </div>

            {isExpanded && (
                <div className="bill-details">
                    <h3>Details</h3>
                    <p>{bill?.details}</p>
                </div>
            )}
        </div>
    );
}