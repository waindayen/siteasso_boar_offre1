-- Cette fonction calcule le pourcentage de progression
create or replace function calculate_progress(row_id int)
returns numeric
language plpgsql
as $$
declare
  progress numeric;
begin
  select (raised::numeric / goal::numeric * 100)
  into progress
  from projects
  where id = row_id;
  
  return progress;
end;
$$;