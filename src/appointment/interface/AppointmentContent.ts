export interface BookingLink {
  _key: string;
  label: string;
  url: string;
}

export interface AppointmentOption {
  _key: string;
  label: string;
  kind: "booking" | "contact";
  bookings?: BookingLink[];
  message?: string;
  buttonLabel?: string;
}

export interface AppointmentContent {
  header: { title: string; description: string };
  selectLabel: string;
  options: AppointmentOption[];
}
