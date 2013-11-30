if [ $1 ]; then
  if [ $1 == 'stop' ]; then
    kill `ps aux | awk '/coffee/ && !/awk/ {print $2}'`
  fi
else
  coffee -cw -o static/javascripts coffee/ &
  coffee -cw -o static/spec spec/ &
fi
