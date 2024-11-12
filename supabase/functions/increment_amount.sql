-- Cette fonction incrémente le montant collecté pour un projet
create or replace function increment_amount(row_id int, increment int)
returns int
language plpgsql
as $$
declare
  new_amount int;
begin
  update projects
  set raised = raised + increment
  where id = row_id
  returning raised into new_amount;
  
  return new_amount;
end;
$$;