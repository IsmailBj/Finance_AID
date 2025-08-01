import { Dispatch, SetStateAction } from "react";

export interface Group {
  id: number;
  group_name: string;
  pay_amount: number;
  status: string;
  start_date: string;
  end_date: string;
  user_id: number;
  plan_type: string;
  plan_amount: number;
  created_at: string;
  currency_type: string;
  group_category: string;
}

interface Wallet {
  card_name: string;
  balance: number;
  currency_type: string;
  card_type: string;
  expire_date: string;
}

export interface TabListProps {
  group: Group;
}

export interface TableListProps {
  onOpenModal: () => void;
  groups: Group[];
}

export interface CardProps {
  wallet: Wallet;
  ShowEditOptions: boolean;
}

export interface FilterBarProps {
  onOpenModal: () => void;
  onEdit: () => void;
}

export interface CheckButtonProps {
  isChecked: boolean;
}

export interface RegLogProps {
  showRegister: Dispatch<SetStateAction<boolean>>;
}

export interface OnCloseModalProps {
  onClose: () => void;
}

export type PlanType = "one_time" | "weekly" | "monthly" | "yearly";
