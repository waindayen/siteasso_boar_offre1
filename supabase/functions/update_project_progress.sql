-- Function to update project progress in a single transaction
create or replace function update_project_progress(
  p_project_id int,
  p_amount int
)
returns void
language plpgsql
as $$
begin
  -- Update project in a single transaction
  update projects
  set 
    raised = raised + p_amount,
    progress = (raised + p_amount)::numeric / goal::numeric * 100
  where id = p_project_id;
end;
$$;