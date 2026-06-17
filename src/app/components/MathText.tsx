interface MathTextProps {
  children: string;
  className?: string;
}

export function MathText({ children, className = "" }: MathTextProps) {
  // Split text by $ delimiters for inline math
  const parts = children.split(/(\$[^$]+\$)/g);
  
  return (
    <span className={className}>
      {parts.map((part, index) => {
        // Check if this part is math (wrapped in $)
        if (part.startsWith('$') && part.endsWith('$')) {
          const math = part.slice(1, -1); // Remove the $ delimiters
          return <span key={index} className="italic" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{renderSimpleMath(math)}</span>;
        }
        // Regular text
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}

// Simple renderer for basic math notation
function renderSimpleMath(math: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let currentText = '';
  let i = 0;
  
  while (i < math.length) {
    // Handle subscripts: x_0 or x_{10}
    if (math[i] === '_') {
      if (currentText) {
        parts.push(currentText);
        currentText = '';
      }
      i++;
      
      // Check for braces
      if (math[i] === '{') {
        let subscript = '';
        i++;
        while (i < math.length && math[i] !== '}') {
          subscript += math[i];
          i++;
        }
        i++; // skip closing brace
        parts.push(<sub key={parts.length}>{subscript}</sub>);
      } else {
        // Single character subscript
        parts.push(<sub key={parts.length}>{math[i]}</sub>);
        i++;
      }
    }
    // Handle superscripts: x^2 or x^{10}
    else if (math[i] === '^') {
      if (currentText) {
        parts.push(currentText);
        currentText = '';
      }
      i++;
      
      // Check for braces
      if (math[i] === '{') {
        let superscript = '';
        i++;
        while (i < math.length && math[i] !== '}') {
          superscript += math[i];
          i++;
        }
        i++; // skip closing brace
        parts.push(<sup key={parts.length}>{superscript}</sup>);
      } else {
        // Single character superscript
        parts.push(<sup key={parts.length}>{math[i]}</sup>);
        i++;
      }
    }
    // Handle Greek letters
    else if (math[i] === '\\') {
      if (currentText) {
        parts.push(currentText);
        currentText = '';
      }
      
      let command = '';
      i++;
      while (i < math.length && /[a-zA-Z]/.test(math[i])) {
        command += math[i];
        i++;
      }
      
      const greekMap: { [key: string]: string } = {
        'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'δ', 'epsilon': 'ε',
        'zeta': 'ζ', 'eta': 'η', 'theta': 'θ', 'iota': 'ι', 'kappa': 'κ',
        'lambda': 'λ', 'mu': 'μ', 'nu': 'ν', 'xi': 'ξ', 'pi': 'π',
        'rho': 'ρ', 'sigma': 'σ', 'tau': 'τ', 'upsilon': 'υ', 'phi': 'φ',
        'chi': 'χ', 'psi': 'ψ', 'omega': 'ω',
        'Gamma': 'Γ', 'Delta': 'Δ', 'Theta': 'Θ', 'Lambda': 'Λ', 'Xi': 'Ξ',
        'Pi': 'Π', 'Sigma': 'Σ', 'Phi': 'Φ', 'Psi': 'Ψ', 'Omega': 'Ω'
      };
      
      if (greekMap[command]) {
        parts.push(greekMap[command]);
      } else {
        parts.push('\\' + command);
      }
    }
    else {
      currentText += math[i];
      i++;
    }
  }
  
  if (currentText) {
    parts.push(currentText);
  }
  
  return <>{parts}</>;
}
