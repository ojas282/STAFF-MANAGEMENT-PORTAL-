export interface StaffMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  photo: string;
  phone: string;
  joiningDate: string;
  bloodGroup: string;
  shiftTimings: string;
  employeeId: string;
  address: string;
  emergencyContact: string;
  idIssueDate: string;
  gender: string;
  qualifications: string[];
  idcard: string;
  dob: string;
}

export type Department = 'doctors' | 'nursing' | 'frontDesk' | 'menial' | 'pharmacy';