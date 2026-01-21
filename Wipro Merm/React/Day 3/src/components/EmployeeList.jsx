import Employee from "./Employee";

export default function EmployeeList() {
  const employees = [
    { name: "Aishvarya", role: "Developer" },
    { name: "Hema", role: "Tester" },
    { name: "Sneha", role: "Designer" },
  ];

  const handlePromote = (name) => {
    alert(`${name} has been promoted!`);
  };

  return (
    <div className="card">
      <h2 className="title">Employee List</h2>

      {employees.map((emp, index) => (
        <Employee
          key={index}
          name={emp.name}
          role={emp.role}
          onPromote={handlePromote}
        />
      ))}
    </div>
  );
}