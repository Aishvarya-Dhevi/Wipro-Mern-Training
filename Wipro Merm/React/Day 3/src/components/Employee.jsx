export default function Employee({ name, role, onPromote }) {
  return (
    <div className="employee-row">
      <div>
        <p className="emp-name">{name}</p>
        <p className="emp-role">{role}</p>
      </div>

      <button className="promote-btn" onClick={() => onPromote(name)}>
        Promote
      </button>
    </div>
  );
}